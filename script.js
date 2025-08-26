// نقش کاربر: اگر false باشد فقط مشاهده
const isAdmin = true;

document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// مخفی کردن دکمه‌های ثبت برای غیرادمین
if (!isAdmin) {
  document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
}

// فعال‌سازی تقویم شمسی
$('.jdate').persianDatepicker({
  initialValue: false,
  format: 'YYYY/MM/DD',
  autoClose: true,
  calendarType: 'persian'
});

// نمونه ثبت پیمانکار
const contractorForm = document.getElementById('contractorForm');
const contractorList = document.getElementById('contractorList');
let contractors = [];

contractorForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(contractorForm).entries());
  contractors.push(data);
  renderContractors();
  contractorForm.reset();
});

function renderContractors() {
  contractorList.innerHTML = contractors.map(c => `<div>${c.name} (${c.year || ''})</div>`).join('');
  document.querySelectorAll('select[name="contractor"]').forEach(sel => {
    sel.innerHTML = contractors.map(c => `<option>${c.name}</option>`).join('');
  });
}
