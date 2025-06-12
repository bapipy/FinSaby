<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<canvas id="portfolioChart"></canvas>
const ctx = document.getElementById('portfolioChart');
new Chart(ctx, {
  type: 'line',
  data: { /* your financial data */ },
  options: { /* storytelling emphasis */ }
});
<a href="cashflows.xlsx" class="btn btn-primary" download>Download Cash Flows</a>
