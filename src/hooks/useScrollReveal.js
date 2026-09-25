import { useEffect } from 'react'

/**
 * Reveals [data-reveal] elements once as they enter the viewport.
 * Re-scans on mutation so content that mounts later is still observed.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]:not(.is-visible)')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
