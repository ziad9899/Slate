import { useEffect } from 'react'
import { Topbar } from '@/components/builder/Topbar'
import { Sidebar } from '@/components/builder/Sidebar'
import { Canvas } from '@/components/builder/Canvas'
import { Inspector } from '@/components/builder/Inspector'
import { useBuilderStore } from '@/state/builderStore'

export default function Builder() {
  const selectSection = useBuilderStore((s) => s.selectSection)

  // ESC to deselect
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') selectSection(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectSection])

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-zinc-950 text-zinc-100">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Canvas />
        <Inspector />
      </div>
    </div>
  )
}
