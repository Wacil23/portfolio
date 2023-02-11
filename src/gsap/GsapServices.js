import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function ctx(trigger, start, end, scrub = false || 0, toggleActions, toTarget, style, markers = false) {
    return gsap.context(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: start,
                end: end,
                markers: markers,
                scrub: scrub,
                toggleActions: toggleActions,
            },
        })
            .to(toTarget, style)
    })
}
