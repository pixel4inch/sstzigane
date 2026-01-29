import { useState } from 'react'

const ReadMoreText = ({ text, limit = 300 }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const isLongText = text.length > limit
  const displayedText = isExpanded
    ? text
    : text.substring(0, limit)

  return (
    <p className="mb-0">
      {displayedText}
      {isLongText && !isExpanded && '... '}
      {isLongText && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ cursor: 'pointer', color: '#0d6efd', fontWeight: 500 }}
        >
          {isExpanded ? ' Read less' : ' Read more'}
        </span>
      )}
    </p>
  )
}

export default ReadMoreText
