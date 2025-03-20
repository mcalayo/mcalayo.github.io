'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

interface TypingEffectProps {
  messages: string[]
}

const TypingEffect: React.FC<TypingEffectProps> = ({ messages }) => {
  let messagesSequence = []

  for (let i = 0; i < messages.length; i++) {
    messagesSequence.push(messages[i])
    messagesSequence.push(1000)
  }

  return (
    <TypeAnimation
      sequence={messagesSequence}
      wrapper='span'
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      cursor={false}
    />
  )
}

export default TypingEffect
