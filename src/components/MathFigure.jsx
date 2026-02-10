
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

    // Unit Circle with Reference Angle (q124)
    if (figureId === 'q124') {
        return (
            <svg viewBox="0 0 200 200" style={style}>
                <title>Círculo Unitario y Ángulo de Referencia</title>
                {/* Axes */}
                <line x1="100" y1="10" x2="100" y2="190" style={axisStyle} />
                <line x1="10" y1="100" x2="190" y2="100" style={axisStyle} />
                <text x="180" y="95" style={{ ...textStyle, fontSize: '10px' }}>x</text>
                <text x="105" y="20" style={{ ...textStyle, fontSize: '10px' }}>y</text>

                {/* Circles */}
                <circle cx="100" cy="100" r="60" style={{ fill: 'none', stroke: 'rgba(255,255,255,0.3)', strokeWidth: '1' }} />

                {/* Angle Theta (e.g. 130 deg) */}
                {/* 130 deg -> x = 60*cos(130), y = 60*sin(130). 130 is 2nd quad. */}
                {/* cos(130) ~ -0.64 -> x ~ -38. sin(130) ~ 0.76 -> y ~ 45. (svg y is flipped) */}
                {/* Center (100, 100). Point (~62, ~55) */}
                <line x1="100" y1="100" x2="62" y2="55" style={strokeStyle} />
                <circle cx="62" cy="55" r="3" fill="var(--text-primary)" />
                <text x="50" y="50" style={textStyle}>P(x,y)</text>

                {/* Reference Angle arc */}
                <path d="M 80,100 A 20,20 0 0 1 88,85" style={{ fill: 'none', stroke: '#ef4444' }} />
                <text x="70" y="90" style={{ fill: '#ef4444', fontSize: '10px' }}>θr</text>

                {/* Full Angle arc */}
                <path d="M 120,100 A 20,20 0 0 0 88,85" style={{ fill: 'none', stroke: '#3b82f6', strokeDasharray: '2,2' }} />
                <text x="110" y="80" style={{ fill: '#3b82f6', fontSize: '10px' }}>θ</text>

                {/* Quadrants */}
                <text x="150" y="50" style={{ fill: 'rgba(255,255,255,0.2)' }}>I</text>
                <text x="50" y="50" style={{ fill: 'rgba(255,255,255,0.2)' }}>II</text>
                <text x="50" y="150" style={{ fill: 'rgba(255,255,255,0.2)' }}>III</text>
                <text x="150" y="150" style={{ fill: 'rgba(255,255,255,0.2)' }}>IV</text>
            </svg>
        )
    }

    // Internet Users Table (q123)
    if (figureId === 'q123_generic') {
        return (
            <svg viewBox="0 0 400 200" style={style}>
                <title>Usuarios de Internet (Millones)</title>
                <rect x="10" y="10" width="380" height="180" rx="5" fill="#1e293b" />
                <text x="200" y="30" style={{ ...textStyle, textAnchor: 'middle', fontWeight: 'bold' }}>Usuarios de Internet (2000 vs 2012)</text>

                {/* Headers */}
                <text x="50" y="55" style={{ ...textStyle, fontSize: '10px', fill: '#94a3b8' }}>Región</text>
                <text x="180" y="55" style={{ ...textStyle, fontSize: '10px', fill: '#94a3b8' }}>2000</text>
                <text x="280" y="55" style={{ ...textStyle, fontSize: '10px', fill: '#94a3b8' }}>2012</text>
                <line x1="20" y1="60" x2="380" y2="60" style={gridStyle} />

                {/* Rows */}
                <g transform="translate(0, 25)">
                    <text x="50" y="60" style={textStyle}>Asia</text> <text x="180" y="60" style={textStyle}>114 M</text> <text x="280" y="60" style={textStyle}>1,076 M</text>
                    <text x="50" y="85" style={textStyle}>Europa</text> <text x="180" y="85" style={textStyle}>105 M</text> <text x="280" y="85" style={textStyle}>518 M</text>
                    <text x="50" y="110" style={textStyle}>África</text> <text x="180" y="110" style={textStyle}>4.5 M</text> <text x="280" y="110" style={textStyle}>167 M</text>
                    <text x="50" y="135" style={textStyle}>Oceanía</text> <text x="180" y="135" style={textStyle}>7.6 M</text> <text x="280" y="135" style={textStyle}>24.3 M</text>
                </g>
            </svg>
        )
    }

    // Urns Visualization (q128)
    if (figureId === 'q128_generic') {
        return (
            <svg viewBox="0 0 300 120" style={style}>
                <title>Urnas de la Rifa</title>
                {/* Urn 1 */}
                <rect x="30" y="40" width="60" height="70" rx="5" style={{ fill: 'none', stroke: '#f59e0b', strokeWidth: 2 }} />
                <text x="60" y="30" style={{ ...textStyle, textAnchor: 'middle' }}>Urna 1</text>
                <circle cx="60" cy="75" r="15" fill="#f59e0b" opacity="0.2" />
                <text x="60" y="80" style={{ ...textStyle, textAnchor: 'middle', fontSize: '18px' }}>0-9</text>

                {/* Urn 2 */}
                <rect x="120" y="40" width="60" height="70" rx="5" style={{ fill: 'none', stroke: '#10b981', strokeWidth: 2 }} />
                <text x="150" y="30" style={{ ...textStyle, textAnchor: 'middle' }}>Urna 2</text>
                <circle cx="150" cy="75" r="15" fill="#10b981" opacity="0.2" />
                <text x="150" y="80" style={{ ...textStyle, textAnchor: 'middle', fontSize: '18px' }}>0-9</text>

                {/* Urn 3 */}
                <rect x="210" y="40" width="60" height="70" rx="5" style={{ fill: 'none', stroke: '#3b82f6', strokeWidth: 2 }} />
                <text x="240" y="30" style={{ ...textStyle, textAnchor: 'middle' }}>Urna 3</text>
                <circle cx="240" cy="75" r="15" fill="#3b82f6" opacity="0.2" />
                <text x="240" y="80" style={{ ...textStyle, textAnchor: 'middle', fontSize: '18px' }}>0-9</text>
            </svg>
        )
    }

    // Number Representation (q133)
    if (figureId === 'q133_generic') {
        return (
            <svg viewBox="0 0 300 100" style={style}>
                <text x="150" y="40" style={{ ...textStyle, textAnchor: 'middle', fontSize: '12px', fill: '#94a3b8' }}>Número Decimal</text>
                <text x="150" y="70" style={{ ...textStyle, textAnchor: 'middle', fontSize: '36px', fontWeight: 'bold' }}>3,75</text>
                <text x="220" y="55" style={{ ...textStyle, fontSize: '12px', fill: '#ef4444' }}>¿Fracción?</text>
                <path d="M 190 60 Q 210 60 215 55" stroke="#ef4444" fill="none" markerEnd="url(#arrow)" />
            </svg>
        )
    }

    // Bacteria Growth Graph (q134 & q135)
    if (figureId === 'q134_generic' || figureId === 'q135_generic') {
        return (
            <svg viewBox="0 0 300 200" style={style}>
                <title>Crecimiento Bacteriano</title>
                {/* Axes */}
                <line x1="40" y1="180" x2="280" y2="180" style={axisStyle} />
                <line x1="40" y1="180" x2="40" y2="20" style={axisStyle} />
                <text x="280" y="195" style={{ ...textStyle, fontSize: '10px' }}>Tiempo (min)</text>
                <text x="10" y="30" style={{ ...textStyle, fontSize: '10px' }}>Bact.</text>

                {/* Curve y = 2^(t/20) approx */}
                {/* t=0, y=10. t=20, y=20. t=40, y=40. t=60, y=80. t=80, y=160. Scale: y/2 */}
                <path d="M 40 175 Q 100 170 160 140 T 260 20" style={{ fill: 'none', stroke: '#10b981', strokeWidth: 2 }} />

                {/* Points */}
                <circle cx="40" cy="175" r="3" fill="#fff" />
                <text x="25" y="175" style={{ ...textStyle, fontSize: '8px' }}>1</text>

                <circle cx="95" cy="165" r="3" fill="#fff" />
                <text x="95" y="180" style={{ ...textStyle, fontSize: '8px' }}>t=20</text>

                <circle cx="150" cy="145" r="3" fill="#fff" />
                <text x="150" y="160" style={{ ...textStyle, fontSize: '8px' }}>t=40</text>
            </svg>
        )
    }

    // Archery Target (q137)
    if (figureId === 'q137_generic') {
        return (
            <svg viewBox="0 0 200 200" style={style}>
                <title>Diana de Tiro</title>
                {/* 5 visible rings for simplicity */}
                <circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" />
                <circle cx="100" cy="100" r="72" fill="#000" stroke="#fff" />
                <circle cx="100" cy="100" r="54" fill="#3b82f6" stroke="#fff" />
                <circle cx="100" cy="100" r="36" fill="#ef4444" stroke="#fff" />
                <circle cx="100" cy="100" r="18" fill="#f59e0b" stroke="#fff" />
            </svg>
        )
    }

    // Archery Scoreboard (q138)
    if (figureId === 'q138_generic') {
        return (
            <svg viewBox="0 0 400 150" style={style}>
                <title>Puntajes Tiro al Arco</title>
                <rect x="0" y="0" width="400" height="150" rx="8" fill="#1e293b" />

                <text x="20" y="30" style={{ ...textStyle, fontWeight: 'bold' }}>Resultados:</text>

                {/* Martha */}
                <text x="20" y="60" style={{ ...textStyle, fill: '#f59e0b' }}>Martha:</text>
                <text x="90" y="60" style={textStyle}>2 flechas en 6, 1 en 8</text>

                {/* Carolina */}
                <text x="20" y="90" style={{ ...textStyle, fill: '#10b981' }}>Carolina:</text>
                <text x="90" y="90" style={textStyle}>1 en 10, 1 en 5, 1 en 2</text>

                {/* Andrea */}
                <text x="20" y="120" style={{ ...textStyle, fill: '#3b82f6' }}>Andrea:</text>
                <text x="90" y="120" style={textStyle}>3 flechas en 7</text>
            </svg>
        )
    }

    // Olympics Table (q139)
    if (figureId === 'q139_generic') {
        return (
            <svg viewBox="0 0 400 180" style={style}>
                <title>Medallería Histórica</title>
                <rect x="0" y="0" width="400" height="180" rx="8" fill="#0f172a" />
                <text x="200" y="25" style={{ ...textStyle, textAnchor: 'middle', fontWeight: 'bold' }}>Podios Históricos</text>

                <line x1="20" y1="40" x2="380" y2="40" style={gridStyle} />
                <text x="40" y="55" style={{ ...textStyle, fontSize: '11px', fill: '#64748b' }}>País</text>
                <text x="250" y="55" style={{ ...textStyle, fontSize: '11px', fill: '#64748b' }}>Total Podios</text>

                <g transform="translate(0, 10)">
                    <text x="40" y="80" style={textStyle}>URSS</text> <rect x="250" y="70" width="100" height="10" fill="#ef4444" /> <text x="360" y="80" style={{ ...textStyle, fontSize: '10px' }}>18</text>
                    <text x="40" y="100" style={textStyle}>EE. UU.</text> <rect x="250" y="90" width="80" height="10" fill="#3b82f6" /> <text x="340" y="100" style={{ ...textStyle, fontSize: '10px' }}>15</text>
                    <text x="40" y="120" style={textStyle}>México</text> <rect x="250" y="110" width="80" height="10" fill="#10b981" /> <text x="340" y="120" style={{ ...textStyle, fontSize: '10px' }}>15</text>
                    <text x="40" y="140" style={textStyle}>Corea del Sur</text> <rect x="250" y="130" width="60" height="10" fill="#f59e0b" /> <text x="320" y="140" style={{ ...textStyle, fontSize: '10px' }}>12</text>
                </g>
            </svg>
        )
    }
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
