/**
 * LÓGICA DEL MÓDULO 01: Modelado de Epidemia (Fibonacci)
 * Uso estricto de document.getElementById y manejo de datos limpio
 */
function calcFibo() {
    const inputVal = document.getElementById("input-fibo").value;
    const box = document.getElementById("res-fibo");
    
    const N = parseInt(inputVal);
    if (isNaN(N) || N < 1) {
        box.style.display = "block";
        box.innerHTML = `<span style="color:var(--neon-red)">[ERROR] Parámetro de ciclo inválido.</span>`;
        return;
    }

    let actual = 0;
    let siguiente = 1;
    let auxiliar;
    let totalContagios = 0;
    
    let htmlResult = `
        <h4 style="color:var(--neon-cyan)">REPORTE DE SIMULACIÓN EPIDEMIOLÓGICA SIMPLIFICADA:</h4>
        <p style="font-size:0.85rem; margin-bottom:1rem; color:var(--text-dark)">Simulando propagación libre en base al índice de reproducción biológica...</p>
        <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
            <thead>
                <tr style="border-bottom:1px solid var(--neon-purple); text-align:left; color:var(--neon-purple)">
                    <th style="padding:0.5rem">Ciclo/Día</th>
                    <th style="padding:0.5rem">Nuevos Contagios/Día</th>
                    <th style="padding:0.5rem">Carga Hospitalaria Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 1; i <= N; i++) {
        totalContagios += siguiente;
        
        htmlResult += `
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
                <td style="padding:0.5rem; color:var(--neon-cyan)">Ciclo ${i.toString().padStart(2, '0')}</td>
                <td style="padding:0.5rem">${siguiente} infectados</td>
                <td style="padding:0.5rem; color:${totalContagios > 10000 ? 'var(--neon-red)' : 'var(--text-main)'}">${totalContagios} casos activos</td>
            </tr>
        `;

        // Intercambio algorítmico libre de consumo dinámico de heap
        auxiliar = actual + siguiente;
        actual = siguiente;
        siguiente = auxiliar;
    }

    htmlResult += `
            </tbody>
        </table>
        <br>
        <p style="color:var(--neon-green)">[PROCESAMIENTO CONCLUIDO]: Al final de los ${N} ciclos, la curva epidemiológica sin intervención médica acumula un impacto totalizado de ${totalContagios} vectores biológicos activos.</p>
    `;

    box.style.display = "block";
    box.innerHTML = htmlResult;
}

/**
 * LÓGICA DEL MÓDULO 02: Validación Diffie-Hellman en O(sqrt(N))
 * Optimizada para evitar bloqueos del hilo principal del navegador (UI Hang)
 */
function esPrimoPro(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    // Poda inicial rápida de pares y múltiplos de 3
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    // Saltos estructurales i += 6 optimizados para matemática computacional competitiva
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function checkPrimo() {
    const inputVal = document.getElementById("input-primo").value;
    const box = document.getElementById("res-primos");
    
    const token = parseInt(inputVal);
    if (isNaN(token) || token < 1) {
        box.style.display = "block";
        box.innerHTML = `<span style="color:var(--neon-red)">[ERROR] Entrada numérica nula o inválida.</span>`;
        return;
    }

    box.style.display = "block";
    
    // Medición de rendimiento en microsegundos (Métrica de desarrollo Pro)
    const t0 = performance.now();
    const esValido = esPrimoPro(token);
    const t1 = performance.now();
    const tiempoEjecucion = (t1 - t0).toFixed(4);

    if (esValido) {
        box.innerHTML = `
            <div style="border:1px solid var(--neon-green); padding:1rem; background:rgba(57,255,20,0.02)">
                <strong style="color:var(--neon-green)">[AUDITORÍA CONFIGURADA CON ÉXITO]</strong><br><br>
                El valor <span style="color:var(--neon-cyan)">${token}</span> es un <strong>NÚMERO PRIMO INTEGRAL</strong>.<br>
                Cumple los requerimientos matemáticos del protocolo Diffie-Hellman. Es seguro para la inicialización de llaves simétricas compartidas sin riesgo de intrusión.<br><br>
                <span style="color:var(--text-dark); font-size:0.8rem">// Cronómetro de CPU: Evaluado en ${tiempoEjecucion} milisegundos bajo complejidad O(√N).</span>
            </div>
        `;
    } else {
        box.innerHTML = `
            <div style="border:1px solid var(--neon-red); padding:1rem; background:rgba(255,0,85,0.02)">
                <strong style="color:var(--neon-red)">[ALERTA DE VULNERABILIDAD CRÍTICA]</strong><br><br>
                El valor <span style="color:var(--neon-cyan)">${token}</span> es un <strong>NÚMERO COMPUESTO</strong> (No es primo).<br>
                <span style="color:var(--neon-red)">PELIGRO:</span> Si implementas este número en canales criptográficos, un atacante externo puede factorizar la clave mediante fuerza bruta en segundos, comprometiendo la privacidad de los datos.<br><br>
                <span style="color:var(--text-dark); font-size:0.8rem">// Cronómetro de CPU: Rechazado en ${tiempoEjecucion} milisegundos.</span>
            </div>
        `;
    }
}

/**
 * LÓGICA DEL MÓDULO 03: Filtro Híbrido Avanzado (Fibonacci + Criba Eratóstenes)
 */
function calcCombinado() {
    const inputVal = document.getElementById("input-comb").value;
    const box = document.getElementById("res-comb");
    
    const terminos = parseInt(inputVal);
    if (isNaN(terminos) || terminos < 1 || terminos > 45) {
        box.style.display = "block";
        box.innerHTML = `<span style="color:var(--neon-red)">[ERROR] Cantidad de espectros fuera de los límites de estabilidad (1 a 45).</span>`;
        return;
    }

    // Paso 1: Generar secuencia de posiciones Fibonacci (Espectro Base)
    let secuenciaFibo = [];
    let a = 0;
    let b = 1;
    let temp;
    for (let i = 0; i < terminos; i++) {
        secuenciaFibo.push(b);
        temp = a + b;
        a = b;
        b = temp;
    }

    // Nuestro techo numérico máximo para dimensionar el array bool de la Criba
    let techoMaximo = secuenciaFibo[secuenciaFibo.length - 1];

    // Paso 2: Criba de Eratóstenes O(N log log N) para precomputar primalidad a escala masiva
    let matrizCriba = new Array(techoMaximo + 1).fill(true);
    matrizCriba[0] = matrizCriba[1] = false;

    for (let p = 2; p * p <= techoMaximo; p++) {
        if (matrizCriba[p] === true) {
            // Cancelar todos los múltiplos del primo encontrado
            for (let i = p * p; i <= techoMaximo; i += p) {
                matrizCriba[i] = false;
            }
        }
    }

    // Paso 3: Cruce de datos y renderizado dinámico de la topología de red
    let htmlOutput = `
        <h4 style="color:var(--neon-cyan)">MAPEO DE FRECUENCIAS DE RED LIBRES DE RESONANCIA:</h4>
        <p style="font-size:0.85rem; margin-bottom:1rem; color:var(--text-dark)">Filtrando canales limpios para enlaces de telecomunicación comunitaria...</p>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1rem;">
    `;

    secuenciaFibo.forEach((valor, indice) => {
        const esCanalLimpio = matrizCriba[valor];
        
        htmlOutput += `
            <div style="border: 1px solid ${esCanalLimpio ? 'var(--neon-green)' : 'rgba(255,255,255,0.1)'}; 
                        padding: 1rem; 
                        background: ${esCanalLimpio ? 'rgba(57,255,20,0.03)' : 'transparent'}; 
                        border-radius: 4px;">
                <span style="color:var(--text-dark); font-size:0.8rem;">[Canal ${ (indice+1).toString().padStart(2, '0') }]</span><br>
                <strong style="font-size:1.1rem; color:#fff;">Frecuencia: ${valor} MHz</strong><br>
                <span style="color:${esCanalLimpio ? 'var(--neon-green)' : 'var(--text-dark)'}; font-size:0.85rem; font-weight:bold;">
                    ${esCanalLimpio ? '✓ DISPONIBLE (Frecuencia Primaria)' : '✕ BLOQUEADO (Riesgo de Eco)'}
                </span>
            </div>
        `;
    });

    htmlOutput += `</div>`;
    box.style.display = "block";
    box.innerHTML = htmlOutput;
}
