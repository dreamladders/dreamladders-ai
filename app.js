function predictCost() {
  let area = Number(document.getElementById("area").value);
  let floors = Number(document.getElementById("floors").value);
  let material = Number(document.getElementById("material").value);

  // SIMPLE MOCK MODEL (temporary)
  let cost = area * 1500 + floors * 500000 + material * 200000;

  document.getElementById("result").innerText =
    "Estimated Cost: ₹ " + cost.toLocaleString();
}

function askAI() {
  let q = document.getElementById("chatInput").value;

  document.getElementById("chatResult").innerText =
    "AI (Mock): You asked → " + q + " (WebLLM will replace this in Step 3)";
}
