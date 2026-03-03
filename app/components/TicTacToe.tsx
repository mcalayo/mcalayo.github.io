'use client'
import React, { useEffect, useState } from 'react'

type Cell = 'X' | 'O' | null
type Board = Cell[]

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],             // diagonals
]

function getResult(board: Board): { winner: Cell | 'draw'; line: number[] | null } {
  for (const line of WIN_LINES) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line }
    }
  }
  if (board.every(Boolean)) return { winner: 'draw', line: null }
  return { winner: null, line: null }
}

function minimax(board: Board, isMaximizing: boolean, depth: number): number {
  const { winner } = getResult(board)
  if (winner === 'O') return 10 - depth
  if (winner === 'X') return depth - 10
  if (winner === 'draw') return 0

  if (isMaximizing) {
    let best = -Infinity
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        const next = [...board]; next[i] = 'O'
        best = Math.max(best, minimax(next, false, depth + 1))
      }
    }
    return best
  } else {
    let best = Infinity
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        const next = [...board]; next[i] = 'X'
        best = Math.min(best, minimax(next, true, depth + 1))
      }
    }
    return best
  }
}

function getBestMove(board: Board): number {
  let best = -Infinity
  let bestMove = -1
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const next = [...board]; next[i] = 'O'
      const score = minimax(next, false, 0)
      if (score > best) { best = score; bestMove = i }
    }
  }
  return bestMove
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [scores, setScores] = useState({ player: 0, computer: 0, draws: 0 })

  const { winner, line: winLine } = getResult(board)
  const gameOver = winner !== null

  const handleCellClick = (i: number) => {
    if (!isPlayerTurn || board[i] || gameOver) return
    const next = [...board]; next[i] = 'X'
    setBoard(next)
    setIsPlayerTurn(false)
  }

  useEffect(() => {
    if (isPlayerTurn || gameOver) return
    const timer = setTimeout(() => {
      const move = getBestMove(board)
      if (move !== -1) {
        const next = [...board]; next[move] = 'O'
        setBoard(next)
      }
      setIsPlayerTurn(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [isPlayerTurn, board, gameOver])

  useEffect(() => {
    if (!gameOver) return
    setScores(prev => ({
      player:   winner === 'X'     ? prev.player + 1   : prev.player,
      computer: winner === 'O'     ? prev.computer + 1 : prev.computer,
      draws:    winner === 'draw'  ? prev.draws + 1    : prev.draws,
    }))
  }, [gameOver, winner])

  const reset = () => {
    setBoard(Array(9).fill(null))
    setIsPlayerTurn(true)
  }

  const status =
    winner === 'X'    ? 'You win! 🎉' :
    winner === 'O'    ? 'Computer wins!' :
    winner === 'draw' ? "It's a draw!" :
    !isPlayerTurn     ? 'Computer is thinking…' :
                        'Your turn (X)'

  return (
    <div className='flex flex-col items-center gap-5'>
      {/* Scoreboard */}
      <div className='flex gap-6 text-sm'>
        <div className='flex flex-col items-center'>
          <span className='text-sky-400 font-semibold text-lg'>{scores.player}</span>
          <span className='text-slate-400'>You (X)</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-slate-300 font-semibold text-lg'>{scores.draws}</span>
          <span className='text-slate-400'>Draws</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-emerald-400 font-semibold text-lg'>{scores.computer}</span>
          <span className='text-slate-400'>Computer (O)</span>
        </div>
      </div>

      {/* Status */}
      <p className='text-slate-300 text-sm h-5'>{status}</p>

      {/* Board */}
      <div className='grid grid-cols-3 gap-2'>
        {board.map((cell, i) => {
          const isWinCell = winLine?.includes(i)
          return (
            <button
              key={i}
              onClick={() => handleCellClick(i)}
              className={[
                'w-20 h-20 text-3xl font-bold rounded-lg border transition-all',
                isWinCell && cell === 'X' ? 'bg-sky-900/40 border-sky-400/70' :
                isWinCell && cell === 'O' ? 'bg-emerald-900/40 border-emerald-400/70' :
                'bg-slate-800/50 border-slate-700/40',
                !cell && !gameOver && isPlayerTurn ? 'hover:bg-slate-700/50 hover:border-slate-600/60 cursor-pointer' : 'cursor-default',
                cell === 'X' ? 'text-sky-400' : 'text-emerald-400',
              ].join(' ')}
            >
              {cell}
            </button>
          )
        })}
      </div>

      {/* Play Again */}
      <button
        onClick={reset}
        className='px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'
      >
        {gameOver ? 'Play Again' : 'Reset'}
      </button>
    </div>
  )
}
