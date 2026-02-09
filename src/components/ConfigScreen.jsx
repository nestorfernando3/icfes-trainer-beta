import { useState, useEffect } from 'react'
import { getQuestions, getCategories, getQuestionCounts } from '../lib/questionBank.js'
import ModeSelector from './ModeSelector'
import CategorySelector from './CategorySelector'

const SUBJECTS = [
    {
        id: 'lectura',
        name: 'Lectura Crítica',
        icon: '📖',
        description: 'Comprensión, interpretación y evaluación de textos.',
        color: '#667eea'
    },
    {
        id: 'matematicas',
        name: 'Matemáticas',
        icon: '📐',
        description: 'Álgebra, geometría, estadística y probabilidad.',
        color: '#ef4444'
    }
]

export default function ConfigScreen({ onStart }) {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [questionCounts, setQuestionCounts] = useState({})
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [limit, setLimit] = useState(20)
    const [mode, setMode] = useState('simulacro')
    const [selectedSubject, setSelectedSubject] = useState(null)

    useEffect(() => {
        const cats = getCategories()
        const counts = getQuestionCounts()
        setCategories(cats)
        setQuestionCounts(counts)
        setLoading(false)
    }, [])

    const handleStart = async () => {
        setLoading(true)
        const questions = await getQuestions(selectedCategory)

        // Shuffle
        let finalQuestions = [...questions].sort(() => Math.random() - 0.5)

        // If subject is math, check if we need to filter further (if not 'all')
        if (selectedSubject === 'matematicas') {
            if (selectedCategory === 'all') {
                finalQuestions = finalQuestions.filter(q => q.topic.startsWith('Matemáticas'))
            } else {
                // already filtered by getQuestions(selectedCategory)
            }
        } else if (selectedSubject === 'lectura') {
            // If subject is localized (lectura), exclude math if 'all' is selected
            if (selectedCategory === 'all') {
                finalQuestions = finalQuestions.filter(q => !q.topic.startsWith('Matemáticas'))
            }
        }

        // Limit
        if (limit > 0 && finalQuestions.length > limit) {
            finalQuestions = finalQuestions.slice(0, limit)
        }

        onStart({
            questions: finalQuestions,
            timelimit: 0,
            category: selectedCategory === 'all' ? (selectedSubject === 'matematicas' ? 'Matemáticas General' : 'Simulacro Lectura') : selectedCategory,
            mode: mode
        })
        setLoading(false)
    }

    const getFilteredCategories = () => {
        if (!selectedSubject) return []
        if (selectedSubject === 'matematicas') {
            // Return only categories starting with 'Matemáticas'
            return categories.filter(c => c.startsWith('Matemáticas'))
        }
        // Return only categories NOT starting with 'Matemáticas'
        return categories.filter(c => !c.startsWith('Matemáticas'))
    }

    if (loading) return (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <div className="loader"></div>
            <p>Preparando banco de preguntas...</p>
        </div>
    )

    if (!selectedSubject) {
        return (
            <div className="card fade-in">
                <h2>Selecciona la Asignatura</h2>
                <p>Elige el área que deseas practicar hoy.</p>
                <div className="subject-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                    {SUBJECTS.map(subject => (
                        <button
                            key={subject.id}
                            className="subject-card"
                            onClick={() => {
                                setSelectedSubject(subject.id)
                                setSelectedCategory(subject.id === 'matematicas' ? 'Matemáticas' : 'all')
                            }}
                            style={{
                                padding: '2rem',
                                border: `2px solid ${subject.color}`,
                                borderRadius: '12px',
                                background: 'var(--bg-card)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}
                        >
                            <span style={{ fontSize: '2.5rem' }}>{subject.icon}</span>
                            <div>
                                <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>{subject.name}</h3>
                                <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{subject.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    const filteredCategories = getFilteredCategories()

    return (
        <div className="card fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <button
                    onClick={() => setSelectedSubject(null)}
                    style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: 0 }}
                    title="Volver a asignaturas"
                >
                    ⬅
                </button>
                <div>
                    <h2 style={{ margin: 0 }}>Entrenamiento: {SUBJECTS.find(s => s.id === selectedSubject).name}</h2>
                </div>
            </div>

            {/* Mode Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                    Modo de Práctica
                </label>
                <ModeSelector selectedMode={mode} onSelect={setMode} />
            </div>

            {/* Category Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                    Área de Estudio
                </label>
                <CategorySelector
                    categories={filteredCategories}
                    questionCounts={questionCounts}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            </div>

            {/* Quantity Selector */}
            <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                    Cantidad de preguntas
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                    {[10, 20, 50, 0].map(val => (
                        <button
                            key={val}
                            type="button"
                            className={`btn-secondary ${limit === val ? 'active' : ''}`}
                            onClick={() => setLimit(val)}
                        >
                            {val === 0 ? 'Todas' : val}
                        </button>
                    ))}
                </div>
            </div>

            <button className="btn-primary" onClick={handleStart} style={{ width: '100%' }}>
                🚀 Comenzar Entrenamiento
            </button>
        </div>
    )
}

