const internetPlans = [
    "Promocional 700 MB + Deezer + MAX(HBO) = R$139,90",
    "700 MB - FIBRA - Sem streaming = R$129,90",
    "500 MB - FIBRA - Sem streaming = R$109,90",
    "300 MB - FIBRA - Sem streaming = R$94,90",
    "150 MB - FIBRA - Sem streaming = R$79,90",
    "Não Possui"
];

const tvPlans = [
    "SKY+ Básico(+90) = R$89,90",
    "SKY+ Básico(+90) + Telecine(6) = R$119,90",
    "SKY+ Básico(+90) + Premiere(8) = R$149,90",
    "SKY+ Básico(+90) + Telecine(6) + Premiere(8) = R$179,90",
    "Não Possui"
];

const phonePlans = [
    "Fale Ilimitado - Número novo - R$30,00",
    "Fale Ilimitado - Número portado - R$30,00",
    "Não Possui"
];

function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

function extractPrice(plan) {
    const priceMatch = plan.match(/R\$([\d,]+(\.\d{2})?)/);
    if (priceMatch) {
        return parseFloat(priceMatch[1].replace('.', '').replace(',', '.'));
    }
    return 0;
}

function updateTotalPrice() {
    const internetPlan = document.getElementById('internetPlan').value;
    const tvPlan = document.getElementById('tvPlan').value;
    const phonePlan = document.getElementById('phonePlan').value;

    const internetPrice = extractPrice(internetPlan);
    const tvPrice = extractPrice(tvPlan);
    const phonePrice = extractPrice(phonePlan);

    let totalPrice = internetPrice + tvPrice + phonePrice;

    // Somar valores dos checkboxes selecionados
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        totalPrice += parseFloat(checkbox.value || 0);
    });

    document.getElementById('totalPrice').textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
}

document.addEventListener('DOMContentLoaded', () => {
    populateSelect('internetPlan', internetPlans);
    populateSelect('tvPlan', tvPlans);
    populateSelect('phonePlan', phonePlans);

    document.getElementById('internetPlan').addEventListener('change', updateTotalPrice);
    document.getElementById('tvPlan').addEventListener('change', updateTotalPrice);
    document.getElementById('phonePlan').addEventListener('change', updateTotalPrice);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalPrice);
    });

    updateTotalPrice();
});


document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-pic img');

    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transform = 'scale(1.2)';
    });

    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'scale(1)';
    });
});
