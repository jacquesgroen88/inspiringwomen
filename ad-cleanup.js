/*
 * Collapse AdSense auto-ad slots that reserve vertical space but never fill.
 *
 * Google's auto-ads insert <ins class="adsbygoogle"> elements and reserve their
 * height up front. When a slot goes unsold the element keeps that reserved height
 * and leaves a blank gap in the page. The CSS in styles.css catches the two cases
 * Google labels itself ([data-ad-status="unfilled"] and :empty), but slots that
 * never resolve at all carry no status and are not empty, so they survive both
 * rules and can add thousands of pixels of white space to a long article.
 *
 * A real ad always renders an <iframe>, so a slot with no iframe is not earning
 * anything. Two things matter for getting this right:
 *
 *  - The grace period is per slot, timed from when that slot first appeared,
 *    not from page load. The homepage appends articles as you scroll and Google
 *    injects fresh slots alongside them minutes in, so a fixed window after load
 *    would never see them.
 *  - Collapsing sets the height to zero rather than display:none, which keeps the
 *    slot in the layout so a late fill can still happen. If one does fill, its
 *    space is handed straight back.
 */
(function () {
    'use strict';

    var GRACE_MS = 4000;    // per-slot: how long a slot may sit empty before collapsing
    var POLL_MS = 2000;     // steady-state re-check
    var firstSeen = new WeakMap();

    function isFilled(ins) {
        if (ins.getAttribute('data-ad-status') === 'filled') return true;
        var frame = ins.querySelector('iframe');
        // offsetHeight is the iframe's own box, so it stays truthful even while
        // the parent <ins> is collapsed to zero height.
        return !!frame && frame.offsetHeight > 0;
    }

    function collapse(ins) {
        if (ins.dataset.gapCollapsed === '1') return;
        ins.style.setProperty('height', '0px', 'important');
        ins.style.setProperty('min-height', '0px', 'important');
        ins.style.setProperty('margin', '0px', 'important');
        ins.style.setProperty('overflow', 'hidden', 'important');
        ins.dataset.gapCollapsed = '1';
    }

    function restore(ins) {
        if (ins.dataset.gapCollapsed !== '1') return;
        ins.style.removeProperty('height');
        ins.style.removeProperty('min-height');
        ins.style.removeProperty('margin');
        ins.style.removeProperty('overflow');
        delete ins.dataset.gapCollapsed;
    }

    function evaluate() {
        var now = Date.now();
        var slots = document.querySelectorAll('ins.adsbygoogle');
        for (var i = 0; i < slots.length; i++) {
            var ins = slots[i];
            if (!firstSeen.has(ins)) firstSeen.set(ins, now);

            if (isFilled(ins)) {
                restore(ins);
            } else if (now - firstSeen.get(ins) >= GRACE_MS) {
                collapse(ins);
            }
        }
    }

    function start() {
        evaluate();
        setInterval(evaluate, POLL_MS);

        // React immediately when new slots or their iframes are inserted, rather
        // than waiting up to POLL_MS for the next tick.
        if (typeof MutationObserver === 'function') {
            var pending = false;
            new MutationObserver(function () {
                if (pending) return;
                pending = true;
                requestAnimationFrame(function () { pending = false; evaluate(); });
            }).observe(document.documentElement, { childList: true, subtree: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
