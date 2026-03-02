// /**
//  * Data Management & UI State
//  */
// const state = {
//     price: 150,
//     discounted: false,
//     method: 'cash'
// };

// /**
//  * UI Actions & Modal Control
//  */
// function uiAction(type) {
//     const modal = document.getElementById('modalOverlay');
//     const title = document.getElementById('modalTitle');
//     const msg = document.getElementById('modalMsg');
//     const icon = document.getElementById('modalIcon');

//     modal.classList.add('active');

//     switch(type) {
//         case 'Confirm':
//             icon.textContent = '🚀';
//             title.textContent = 'Order Confirmed';
//             msg.textContent = 'Your driver is on the way. Expected arrival in 5 minutes.';
//             break;
//         case 'Cancel':
//             icon.textContent = '🛑';
//             title.textContent = 'Trip Cancelled';
//             msg.textContent = 'We have successfully cancelled your request. No fees applied.';
//             break;
//         case 'Chat':
//             icon.textContent = '💬';
//             title.textContent = 'Chat Window';
//             msg.textContent = 'Connecting you to the driver...';
//             break;
//         default:
//             icon.textContent = '🔔';
//             title.textContent = 'Information';
//             msg.textContent = 'Feature coming soon in the next update.';
//     }
// }

// function closeModal() {
//     document.getElementById('modalOverlay').classList.remove('active');
// }

// /**
//  * Payment & Pricing Logic
//  */
// function setPayment(method) {
//     state.method = method;
//     const btns = ['cash', 'visa', 'wallet'];
//     btns.forEach(b => document.getElementById(`pay-${b}`).classList.remove('active'));
//     document.getElementById(`pay-${method}`).classList.add('active');

//     const hint = document.getElementById('paymentHint');
//     if(method === 'cash') hint.textContent = 'Pay cash to driver';
//     if(method === 'visa') hint.textContent = 'Charged from card **** 4421';
//     if(method === 'wallet') hint.textContent = 'Balance deducted from app wallet';
// }

// function applyPromo() {
//     const code = document.getElementById('promoIn').value.toUpperCase();
//     if (code === 'SAVE20' && !state.discounted) {
//         state.price = state.price * 0.8;
//         state.discounted = true;
//         document.getElementById('priceDisplay').innerHTML = `${state.price} <span class="text-xs font-normal text-gray-500">EGP</span>`;
//         document.getElementById('promoIn').disabled = true;
//         document.getElementById('promoIn').classList.add('bg-green-50', 'border-green-200');
//     } else if (state.discounted) {
//         // Already used
//     } else {
//         alert('Invalid Code. Try SAVE20');
//     }
// }

// /**
//  * Canvas Visualization: Abstract Map
//  */
// function renderMap() {
//     const canvas = document.getElementById('routeCanvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;

//     const w = canvas.width;
//     const h = canvas.height;

//     // Background
//     ctx.fillStyle = '#f8fafc';
//     ctx.fillRect(0, 0, w, h);

//     // City Grid Lines (Abstract)
//     ctx.strokeStyle = '#e2e8f0';
//     ctx.lineWidth = 1;
//     for(let i=0; i<w; i+=40) {
//         ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
//     }
//     for(let j=0; j<h; j+=40) {
//         ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(w, j); ctx.stroke();
//     }

//     // Main Route Line
//     const start = { x: w * 0.2, y: h * 0.6 };
//     const end = { x: w * 0.8, y: h * 0.3 };
    
//     ctx.beginPath();
//     ctx.moveTo(start.x, start.y);
//     ctx.bezierCurveTo(w * 0.5, h * 0.8, w * 0.5, h * 0.2, end.x, end.y);
//     ctx.strokeStyle = '#3b82f6';
//     ctx.lineWidth = 6;
//     ctx.lineCap = 'round';
//     ctx.stroke();

//     // Start Node
//     ctx.fillStyle = '#3b82f6';
//     ctx.beginPath(); ctx.arc(start.x, start.y, 8, 0, Math.PI*2); ctx.fill();
//     ctx.strokeStyle = 'white'; ctx.lineWidth = 3; ctx.stroke();

//     // End Node
//     ctx.fillStyle = '#ef4444';
//     ctx.beginPath(); ctx.arc(end.x, end.y, 8, 0, Math.PI*2); ctx.fill();
//     ctx.strokeStyle = 'white'; ctx.lineWidth = 3; ctx.stroke();
// }

// /**
//  * Chart Visualization: Traffic Trends
//  */
// function renderChart() {
//     const ctx = document.getElementById('trafficChart').getContext('2d');
    
//     // Gradient for visual depth
//     const grad = ctx.createLinearGradient(0, 0, 0, 160);
//     grad.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
//     grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['Now', '+10m', '+20m', '+30m', 'End'],
//             datasets: [{
//                 data: [30, 60, 45, 80, 20],
//                 borderColor: '#3b82f6',
//                 backgroundColor: grad,
//                 borderWidth: 3,
//                 tension: 0.4,
//                 fill: true,
//                 pointRadius: 0
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: { legend: { display: false } },
//             scales: {
//                 y: { display: false },
//                 x: { 
//                     grid: { display: false },
//                     ticks: { color: '#94a3b8', font: { size: 9 } }
//                 }
//             }
//         }
//     });
// }

// /**
//  * Initialization
//  */
// window.onload = () => {
//     renderMap();
//     renderChart();
// };

// window.onresize = () => renderMap();


 // State Logic
        let currentPrice = 150;
        let isDiscounted = false;

        // UI Interactions
        function uiAction(type) {
            const modal = document.getElementById('modalOverlay');
            const title = document.getElementById('modalTitle');
            const msg = document.getElementById('modalMsg');
            const icon = document.getElementById('modalIcon');

            modal.classList.add('active');

            if(type === 'Confirm') {
                icon.textContent = '✅';
                title.textContent = 'Order Placed';
                msg.textContent = 'Your ride has been confirmed. The driver is arriving soon.';
            } else if(type === 'Cancel') {
                icon.textContent = '⚠️';
                title.textContent = 'Cancelled';
                msg.textContent = 'Your trip request has been successfully cancelled.';
            } else if(type === 'Chat') {
                icon.textContent = '💬';
                title.textContent = 'Chatting';
                msg.textContent = 'Connecting you to Joseph Nasser...';
            }
        }

        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('active');
        }

        function setPayment(method) {
            document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(`pay-${method}`).classList.add('active');
        }

        function applyPromo() {
            const input = document.getElementById('promoIn');
            if(input.value.toUpperCase() === 'SAVE20' && !isDiscounted) {
                currentPrice = currentPrice * 0.8;
                isDiscounted = true;
                document.getElementById('priceDisplay').textContent = `${currentPrice.toFixed(0)} EGP`;
                input.style.borderColor = '#10b981';
                input.disabled = true;
            }
        }

        // Visualizations
        function initCharts() {
            // Map Canvas Sketch
            const canvas = document.getElementById('routeCanvas');
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            ctx.strokeStyle = '#cbd5e1';
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(50, 180);
            ctx.bezierCurveTo(150, 220, 250, 50, 350, 80);
            ctx.lineWidth = 4;
            ctx.stroke();

            // Traffic Chart
            const tCtx = document.getElementById('trafficChart').getContext('2d');
            new Chart(tCtx, {
                type: 'line',
                data: {
                    labels: ['1pm', '2pm', '3pm', '4pm', '5pm'],
                    datasets: [{
                        data: [20, 45, 30, 70, 40],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { display: false }, x: { grid: { display: false } } }
                }
            });
        }

        window.onload = initCharts;