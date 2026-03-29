const toggle = document.getElementById("darkToggle");
const html = document.documentElement;
toggle.addEventListener('change', function () {
    if (toggle.checked) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light');
    }
});
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    toggle.checked = true;
}

const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function openModal(content) {
    modalContent.innerHTML = content;
    modalOverlay.classList.remove("hidden");
    setTimeout(() => {
        modalBox.classList.remove("scale-95", "opacity-0");
        modalBox.classList.add("scale-100", "opacity-100");
    }, 50);
}

function hideModal() {
    modalBox.classList.add("scale-95", "opacity-0");
    setTimeout(() => modalOverlay.classList.add("hidden"), 200);
}

closeModal.onclick = hideModal;
modalOverlay.onclick = e => e.target === modalOverlay && hideModal();
document.addEventListener("keydown", e => e.key === "Escape" && hideModal());

document.getElementById("openSignup").onclick = () => {
    openModal(`
    <h2 class="text-2xl font-bold mb-6 text-center">Create Account</h2>
    <input class="w-full mb-3 px-4 py-2 border rounded" placeholder="Email">
    <input class="w-full mb-4 px-4 py-2 border rounded" placeholder="Password" type="password">
    <button class="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
  `);
};

document.getElementById("openDownload").onclick = () => {
    openModal(`
    <h2 class="text-2xl font-bold mb-4 text-center">Download App</h2>
    <p class="text-center text-gray-500 mb-4">Scan QR or choose platform</p>
    <div class="flex justify-center gap-4">
      <button class="px-4 py-2 bg-black text-white rounded">App Store</button>
      <button class="px-4 py-2 bg-green-600 text-white rounded">Google Play</button>
    </div>
  `);
};

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const indicator = document.getElementById("priceIndicator");
const monthlyPlans = document.getElementById("monthlyPlans");
const yearlyPlans = document.getElementById("yearlyPlans");

monthlyBtn.onclick = () => {
    indicator.style.transform = "translateX(0)";
    monthlyPlans.classList.remove("hidden");
    yearlyPlans.classList.add("hidden");
};

yearlyBtn.onclick = () => {
    indicator.style.transform = "translateX(100%)";
    yearlyPlans.classList.remove("hidden");
    monthlyPlans.classList.add("hidden");
};


const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll("input, textarea").forEach(input => {
    if (!input.value.trim()) {
      input.classList.add("border-red-500");
      valid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });

  if (valid) {
    alert("Message Sent Successfully ✅");
    form.reset();
  }
});

==
===
5=="5"
5==="5"
5==5
5===5
