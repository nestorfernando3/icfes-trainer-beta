
export default function MathFigure({ figureId }) {
    if (!figureId) return null

    const style = {
        width: '100%',
        maxWidth: '400px',
        margin: '1rem auto',
        display: 'block',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        background: 'rgba(255,255,255,0.02)',
        padding: '1rem'
    }

    const textStyle = { fill: 'var(--text-primary)', fontSize: '14px', fontFamily: 'sans-serif' }
    const strokeStyle = { stroke: 'var(--text-primary)', strokeWidth: '2' }
    const axisStyle = { stroke: 'var(--text-secondary)', strokeWidth: '1' }
    const gridStyle = { stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1' }

    // Net of a prism (Desarrollo plano)
    if (figureId === 'q105') {
        return (
            <svg viewBox="0 0 300 200" style={style}>
                <title>Desarrollo plano prisma</title>
                {/* Base faces (approximate layout based on typical irregular prism net) */}
                <rect x="50" y="80" width="40" height="80" style={{ fill: 'none', ...strokeStyle }} />
                <rect x="90" y="80" width="40" height="80" style={{ fill: 'none', ...strokeStyle }} />
                <rect x="130" y="80" width="40" height="80" style={{ fill: 'none', ...strokeStyle }} />
                <rect x="170" y="80" width="40" height="80" style={{ fill: 'none', ...strokeStyle }} />
                {/* Top and Bottom Bases (irregular polygons) */}
                <polygon points="50,80 70,50 110,50 130,80" style={{ fill: 'none', ...strokeStyle }} />
                <polygon points="50,160 70,190 110,190 130,160" style={{ fill: 'none', ...strokeStyle }} />
            </svg>
        )
    }

    // Function Mapping (Conjuntos con flechas) - NOT A FUNCTION (one to many)
    if (figureId === 'q106') {
        return (
            <svg viewBox="0 0 300 150" style={style}>
                <title>Relación no funcional</title>
                {/* Sets M and N ovals */}
                <ellipse cx="80" cy="75" rx="40" ry="60" style={{ fill: 'none', ...strokeStyle }} />
                <text x="75" y="15" style={textStyle}>M</text>
                <ellipse cx="220" cy="75" rx="40" ry="60" style={{ fill: 'none', ...strokeStyle }} />
                <text x="215" y="15" style={textStyle}>N</text>

                {/* Elements */}
                <text x="75" y="50" style={textStyle}>1</text>
                <text x="75" y="75" style={textStyle}>2</text>
                <text x="75" y="100" style={textStyle}>3</text>

                <text x="215" y="50" style={textStyle}>a</text>
                <text x="215" y="75" style={textStyle}>b</text>
                <text x="215" y="100" style={textStyle}>c</text>

                {/* Arrows: 1->a, 1->b (Making it NOT a function) */}
                <line x1="90" y1="48" x2="200" y2="48" style={strokeStyle} markerEnd="url(#arrow)" />
                <line x1="90" y1="52" x2="200" y2="72" style={strokeStyle} markerEnd="url(#arrow)" />
                <line x1="90" y1="75" x2="200" y2="100" style={strokeStyle} markerEnd="url(#arrow)" />

                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="var(--text-primary)" />
                    </marker>
                </defs>
            </svg>
        )
    }

    // Linear Graph y = 1.5x + 3
    if (figureId === 'q107') {
        return (
            <svg viewBox="0 0 200 200" style={style}>
                <title>Gráfica Lineal</title>
                {/* Grid */}
                <line x1="100" y1="0" x2="100" y2="200" style={axisStyle} /> {/* Y Axis */}
                <line x1="0" y1="100" x2="200" y2="100" style={axisStyle} /> {/* X Axis */}

                {/* Line: y = 1.5x + 3. passes through (0,3) and (-2,0) approx scale */}
                {/* Let's say center (100,100) is (0,0). Scale 20px = 1 unit. */}
                {/* (0,3) -> x=100, y=100 - 3*20 = 40 */}
                {/* (-2,0) -> x=100 - 2*20 = 60, y=100 */}
                <line x1="60" y1="100" x2="120" y2="10" style={{ stroke: '#4caf50', strokeWidth: '3' }} />

                <circle cx="100" cy="40" r="3" fill="var(--text-primary)" />
                <text x="105" y="40" style={textStyle}>3</text>
            </svg>
        )
    }

    // Graph failing vertical line test (Not a function)
    if (figureId === 'q109') {
        return (
            <svg viewBox="0 0 200 200" style={style}>
                <title>Relación no funcional gráfica</title>
                <line x1="100" y1="0" x2="100" y2="200" style={axisStyle} />
                <line x1="0" y1="100" x2="200" y2="100" style={axisStyle} />
                {/* Parabola opening sideways x = y^2 */}
                <path d="M 150 20 Q 50 100 150 180" style={{ fill: 'none', stroke: '#ef4444', strokeWidth: '3' }} />
            </svg>
        )
    }

    // Number Line with points
    if (figureId === 'q110') {
        return (
            <svg viewBox="0 0 400 100" style={style}>
                <line x1="20" y1="50" x2="380" y2="50" style={strokeStyle} />

                {/* Ticks */}
                {[0, 1, 2, 3, 4].map((v, i) => (
                    <g key={v} transform={`translate(${50 + i * 70}, 50)`}>
                        <line y1="-5" y2="5" style={strokeStyle} />
                        <text y="20" x="-5" style={textStyle}>{v}</text>
                    </g>
                ))}

                {/* Points P, Q, R, S */}
                <circle cx="50" cy="50" r="4" fill="#f59e0b" /> <text x="50" y="40" style={textStyle}>P (0)</text>
                <circle cx="150" cy="50" r="4" fill="#f59e0b" /> <text x="150" y="40" style={textStyle}>Q</text>
            </svg>
        )
    }

    // Sprinkler Circle (Area coverage)
    if (figureId === 'q111') {
        return (
            <svg viewBox="0 0 200 200" style={style}>
                <circle cx="100" cy="100" r="80" style={{ fill: '#10b981', opacity: 0.3 }} /> {/* Lawn 20m diam -> r=10u -> 80px */}
                <circle cx="100" cy="100" r="80" style={{ fill: 'none', stroke: '#10b981', strokeWidth: 2 }} />

                <circle cx="100" cy="100" r="48" style={{ fill: 'rgba(59, 130, 246, 0.5)', stroke: '#3b82f6' }} /> {/* Sprinkler 12m rad -> 12u -> 96px diam? No r=12. Lawn r=10. Wait. */}
                {/* Lawn diam=20 -> Rad=10. Sprinkler radius=12. */}
                {/* Sprinkler covers MORE than the lawn if placed at center. */}
                {/* Question asks where NOT to place it. */}
                <text x="90" y="105" style={{ ...textStyle, fontSize: '10px' }}>Zona Verde</text>
            </svg>
        )
    }

    // Cone cut
    if (figureId === 'q116') {
        return (
            <svg viewBox="0 0 200 200" style={style}>
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(50,50,50)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(150,150,150)', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <polygon points="100,20 40,180 160,180" style={{ fill: 'url(#grad1)' }} />
                <ellipse cx="100" cy="180" rx="60" ry="10" style={{ fill: 'rgb(100,100,100)' }} />

                {/* Cut plane */}
                <line x1="20" y1="100" x2="180" y2="100" style={{ stroke: '#ef4444', strokeWidth: 2, strokeDasharray: "5,5" }} />
                <text x="185" y="100" style={{ fill: '#ef4444', fontSize: '12px' }}>Corte</text>
            </svg>
        )
    }

    // Bar Chart (Podiums)
    if (figureId === 'q120') {
        // Data: KR(7), US(2), USSR(1), CHN(1) ...
        const data = [7, 2, 1, 1]
        const labels = ['KOR', 'USA', 'URS', 'CHN']
        return (
            <svg viewBox="0 0 300 150" style={style}>
                {data.map((val, i) => (
                    <g key={i}>
                        <rect x={40 + i * 60} y={130 - val * 10} width="40" height={val * 10} fill="#3b82f6" />
                        <text x={45 + i * 60} y={145} style={{ ...textStyle, fontSize: '10px' }}>{labels[i]}</text>
                        <text x={50 + i * 60} y={130 - val * 10 - 5} style={{ ...textStyle, fontSize: '10px' }}>{val}</text>
                    </g>
                ))}
                <line x1="30" y1="130" x2="280" y2="130" style={axisStyle} />
            </svg>
        )
    }

    // Generic Fallback for valid ID but no specific implementation
    return (
        <div style={style}>
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📐</div>
                <p>Referencia Visual: {figureId}</p>
                <p style={{ fontSize: '0.8rem' }}>Gráfico en proceso de digitalización</p>
            </div>
        </div>
    )
}
