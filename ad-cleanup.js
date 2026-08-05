/*
 * Collapse AdSense auto-ad slots that reserve vertical space but never fill.
 *
 * Google's auto-ads insert <ins class="adsbygoogle"> elements and reserve their
 * height up front. When a slot goes unsold the element keeps that reserved height
 * and leaves a blank gap in the article. The CSS in styles.css catches the two
 * cases Google labels itself ([data-ad-status="unfilled"] and :empty), but slots
 * that never resolve at all carry no status and are not empty, so they survive
 * both rules and can add over 2000px of white space to a long article.
 *
 * A real ad always renders an <iframe>. So: after giving Google a fair window to
 * fill, collapse any slot that still has no iframe. Slots that fill later are
 * re-checked, so nothing that earns money is ever hidden.
 */
(function () {
    'use strict';

    var GRACE_MS = 4000;   // time given to the initial fill before first sweep
    var RECHECK_MS = 3000; // interval for late fills
    var MAX_SWEEPS = 5;

    function isFilled(ins) {
        var frame = ins.querySelector('iframe');
        if (!frame) return false;
        // A collapsed 0-height iframe is not a rendered ad either.
        return frame.getBoundingClientRect().height > 0 || ins.dataset.adStatus === 'filled';
    }

    function sweep() {
        var slots = document.querySelectorAll('ins.adsbygoogle');
        for (var i = 0; i < slots.length; i++) {
            var ins = slots[i];
            if (isFilled(ins)) {
                // A previously collapsed slot that has now filled gets its space back.
                if (ins.dataset.gapCollapsed === '1') {
                    ins.style.removeProperty('display');
                    ins.style.removeProperty('min-height');
                    ins.style.removeProperty('height');
                    delete ins.dataset.gapCollapsed;
                }
                continue;
            }
            if (ins.dataset.gapCollapsed === '1') continue;
            ins.style.setProperty('display', 'none', 'important');
            ins.style.setProperty('min-height', '0', 'important');
            ins.style.setProperty('height', '0', 'important');
            ins.dataset.gapCollapsed = '1';
        }
    }

    function start() {
        var sweeps = 0;
        setTimeout(function run() {
            sweep();
            if (++sweeps < MAX_SWEEPS) setTimeout(run, RECHECK_MS);
        }, GRACE_MS);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
