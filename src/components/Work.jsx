import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { work } from '../data/content.js'

const OFFSET = 22
const EDGE = 16

const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

function Work() {
  const [preview, setPreview] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const previewRef = useRef(null)
  const sizeRef = useRef({ w: 0, h: 0 })
  const cursorRef = useRef({ x: 0, y: 0 })
  const triggerRef = useRef(null)
  const closeRef = useRef(null)

  /* Positioned via the independent `translate` property so the entrance
     animation can own `transform` without fighting the placement. */
  const place = useCallback(() => {
    const el = previewRef.current
    if (!el) return
    const { w, h } = sizeRef.current
    if (!w || !h) return

    const { x, y } = cursorRef.current
    const vw = window.innerWidth
    const vh = window.innerHeight

    let left = x + OFFSET
    let top = y + OFFSET
    if (left + w > vw - EDGE) left = x - w - OFFSET
    if (left < EDGE) left = EDGE
    if (top + h > vh - EDGE) top = y - h - OFFSET
    if (top < EDGE) top = EDGE

    el.style.translate = `${Math.round(left)}px ${Math.round(top)}px`
  }, [])

  // Measure the panel once it exists, then anchor it to the cursor.
  useLayoutEffect(() => {
    if (!preview) return
    const el = previewRef.current
    if (el) {
      const r = el.getBoundingClientRect()
      sizeRef.current = { w: r.width, h: r.height }
    }
    place()
  }, [preview, place])

  // Scrolling under a cursor-anchored panel would desync it, so drop it.
  useEffect(() => {
    if (!preview) return
    const hide = () => setPreview(null)
    window.addEventListener('scroll', hide, { passive: true })
    window.addEventListener('resize', hide)
    return () => {
      window.removeEventListener('scroll', hide)
      window.removeEventListener('resize', hide)
    }
  }, [preview])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      triggerRef.current?.focus()
    }
  }, [lightbox])

  const showPreview = (shot) => {
    if (!canHover()) return
    setPreview(shot)
  }

  const openLightbox = (caseIndex, shotIndex, el) => {
    triggerRef.current = el
    setPreview(null)
    const project = work.cases[caseIndex]
    setLightbox({
      src: project.images[shotIndex],
      title: project.title,
      meta: project.meta,
      index: shotIndex,
      total: project.images.length,
    })
  }

  return (
    <section className="section work" id="work">
      <div className="section__inner">
        <p className="eyebrow" data-reveal>
          {work.eyebrow}
        </p>
        <h2 data-reveal>{work.heading}</h2>
        <div className="work__list">
          {work.cases.map((item, caseIndex) => (
            <article className="case" key={item.title} data-reveal>
              <header className="case__head">
                <span className="case__index">{String(caseIndex + 1).padStart(2, '0')}</span>
                <div>
                  <p className="case__meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                </div>
              </header>
              <div className="case__body">
                <div>
                  <p className="case__label">Task</p>
                  <p>{item.task}</p>
                </div>
                <div>
                  <p className="case__label">Strategy</p>
                  <p>{item.strategy}</p>
                </div>
                <div>
                  <p className="case__label">Outcome</p>
                  <p>{item.outcome}</p>
                </div>
              </div>
              <div
                className="case__gallery"
                onMouseMove={(e) => {
                  cursorRef.current = { x: e.clientX, y: e.clientY }
                  place()
                }}
                onMouseLeave={() => setPreview(null)}
              >
                {item.images.map((src, shotIndex) => (
                  <button
                    type="button"
                    className="case__shot"
                    key={src}
                    aria-label={`${item.title}, visual ${shotIndex + 1} of ${
                      item.images.length
                    }. Open full size.`}
                    onMouseEnter={(e) => {
                      cursorRef.current = { x: e.clientX, y: e.clientY }
                      showPreview({ src, title: item.title })
                    }}
                    // Leaves the image -> the popup goes with it.
                    onMouseLeave={() => setPreview(null)}
                    onFocus={(e) => {
                      const r = e.currentTarget.getBoundingClientRect()
                      cursorRef.current = { x: r.right, y: r.top + r.height / 2 }
                      showPreview({ src, title: item.title })
                    }}
                    onBlur={() => setPreview(null)}
                    onClick={(e) => openLightbox(caseIndex, shotIndex, e.currentTarget)}
                  >
                    <img src={src} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview && (
        <div className="case-preview" ref={previewRef} aria-hidden="true">
          <img className="case-preview__img" src={preview.src} alt="" />
          <span className="case-preview__cap">{preview.title}</span>
        </div>
      )}

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title}, visual ${lightbox.index + 1} of ${lightbox.total}`}
          onKeyDown={(e) => {
            // Single-control dialog, so keep Tab on the close button.
            if (e.key === 'Tab') {
              e.preventDefault()
              closeRef.current?.focus()
            }
          }}
        >
          <button
            type="button"
            className="lightbox__backdrop"
            aria-label="Close preview"
            onClick={() => setLightbox(null)}
          />
          <figure className="lightbox__panel">
            <img
              className="lightbox__img"
              src={lightbox.src}
              alt={`${lightbox.title}, visual ${lightbox.index + 1}`}
            />
            <figcaption className="lightbox__cap">
              <span className="lightbox__meta">{lightbox.meta}</span>
              <span className="lightbox__title">{lightbox.title}</span>
              <span className="lightbox__count">
                {lightbox.index + 1} / {lightbox.total}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__close"
            ref={closeRef}
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  )
}

export default Work
