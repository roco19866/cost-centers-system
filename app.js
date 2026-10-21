/* ========================================================
   نظام تفصيلي حسابات المراكز - Application Logic
   فلاتر احترافية شاملة مع خيارات متعددة (Multi-Select)
   ======================================================== */

// قاعدة بيانات المعاملات المتكاملة
const fullTransactionsData = [
    {
        index: 1,
        date: "2026-01-01",
        displayDate: "01/01/2026",
        serialNo: 4,
        entryNo: 4,
        docNo: 4,
        description: "شراء أثاث للأسر المستفيدة",
        accountCode: "4210200310",
        accountName: "مصاريف برامج وأنشطة ماجدة نادية - أثاث للأسر",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 10559.80,
        credit: 0
    },
    {
        index: 2,
        date: "2026-01-04",
        displayDate: "04/01/2026",
        serialNo: 8,
        entryNo: 8,
        docNo: 8,
        description: "شراء أثاث للأسر المستفيدة",
        accountCode: "4210200310",
        accountName: "مصاريف برامج وأنشطة ماجدة نادية - أثاث للأسر",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 23030.95,
        credit: 0
    },
    {
        index: 3,
        date: "2026-01-04",
        displayDate: "04/01/2026",
        serialNo: 3,
        entryNo: 3,
        docNo: 3,
        description: "شراء أثاث للأسر المستفيدة",
        accountCode: "4210200310",
        accountName: "مصاريف برامج وأنشطة ماجدة نادية - أثاث للأسر",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 6017.14,
        credit: 0
    },
    {
        index: 4,
        date: "2026-01-05",
        displayDate: "05/01/2026",
        serialNo: 15,
        entryNo: 15,
        docNo: 15,
        description: "شراء أجهزة كهربائية وثلاجات للأسر",
        accountCode: "4210200320",
        accountName: "مصاريف برامج وأنشطة - أجهزة كهربائية",
        costCenterCode: null, // حركة غير مربوطة بمركز تكلفة
        costCenterName: "غير مربوط بمركز تكلفة",
        debit: 18420.00,
        credit: 0
    },
    {
        index: 5,
        date: "2026-01-10",
        displayDate: "10/01/2026",
        serialNo: 22,
        entryNo: 22,
        docNo: 22,
        description: "سداد فواتير دعم الأسر المستفيدة - إيجارات",
        accountCode: "4210200330",
        accountName: "مصاريف دعم سكني للأسر",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 14800.50,
        credit: 0
    },
    {
        index: 6,
        date: "2026-01-14",
        displayDate: "14/01/2026",
        serialNo: 29,
        entryNo: 29,
        docNo: 29,
        description: "مصروفات برامج أنشطة نادي تراؤف للبنين",
        accountCode: "4210200310",
        accountName: "مصاريف برامج وأنشطة ماجدة نادية - أثاث للأسر",
        costCenterCode: "CC-102",
        costCenterName: "نادي تراؤف (بنين وبنات)",
        debit: 9450.00,
        credit: 0
    },
    {
        index: 7,
        date: "2026-01-18",
        displayDate: "18/01/2026",
        serialNo: 35,
        entryNo: 35,
        docNo: 35,
        description: "تسوية مستند صرف أثاث مسترجع ومردودات",
        accountCode: "4210200310",
        accountName: "مصاريف برامج وأنشطة ماجدة نادية - أثاث للأسر",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 0,
        credit: 2150.00
    },
    {
        index: 8,
        date: "2026-01-22",
        displayDate: "22/01/2026",
        serialNo: 41,
        entryNo: 41,
        docNo: 41,
        description: "فاتورة صيانة وتشغيل مقر الإدارة",
        accountCode: "4210100100",
        accountName: "رواتب ومكافآت ومصروفات إدارية",
        costCenterCode: null, // حركة غير مربوطة بمركز تكلفة
        costCenterName: "غير مربوط بمركز تكلفة",
        debit: 7350.00,
        credit: 0
    },
    {
        index: 9,
        date: "2026-01-25",
        displayDate: "25/01/2026",
        serialNo: 48,
        entryNo: 48,
        docNo: 48,
        description: "شراء غسالات ومكيفات للأسر المستفيدة",
        accountCode: "4210200320",
        accountName: "مصاريف برامج وأنشطة - أجهزة كهربائية",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 12137.00,
        credit: 0
    },
    {
        index: 10,
        date: "2026-02-02",
        displayDate: "02/02/2026",
        serialNo: 53,
        entryNo: 53,
        docNo: 53,
        description: "حملة التسويق الرقمي وتنمية الموارد الوقفية",
        accountCode: "4210100100",
        accountName: "رواتب ومكافآت ومصروفات إدارية",
        costCenterCode: "CC-104",
        costCenterName: "التسويق وتنمية الموارد",
        debit: 15400.00,
        credit: 0
    },
    {
        index: 11,
        date: "2026-02-10",
        displayDate: "10/02/2026",
        serialNo: 62,
        entryNo: 62,
        docNo: 62,
        description: "شراء مستلزمات مكتبية بدون تحديد مركز التكلفة",
        accountCode: "4210100100",
        accountName: "رواتب ومكافآت ومصروفات إدارية",
        costCenterCode: null, // حركة غير مربوطة
        costCenterName: "غير مربوط بمركز تكلفة",
        debit: 3200.00,
        credit: 0
    },
    {
        index: 12,
        date: "2026-02-15",
        displayDate: "15/02/2026",
        serialNo: 71,
        entryNo: 71,
        docNo: 71,
        description: "كسوة شتاء وحقيبة مدرسية لأبناء الأسر",
        accountCode: "4210200340",
        accountName: "مصاريف كسوة شتاء وحقيبة",
        costCenterCode: "CC-101",
        costCenterName: "الرعاية الاجتماعية",
        debit: 21800.00,
        credit: 0
    }
];

// المتغيرات لحفظ الخيارات المتعددة
let selectedCenters = new Set();
let selectedAccounts = new Set();
let currentFilteredRecords = [];

// دالة تنسيق الأرقام
function formatNumber(num) {
    if (num === 0 || num === '0') return '0';
    return Number(num).toLocaleString('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    });
}

// حساب وتحديث الرصيد التراكمي
function calculateBalances(records) {
    let runningBalance = 0;
    return records.map((record, i) => {
        runningBalance += (record.debit - record.credit);
        return {
            ...record,
            index: i + 1,
            balance: runningBalance
        };
    });
}

// عرض السجلات في الجدول
function renderTable(records) {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;

    if (!records || records.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10" style="padding: 40px; color: #64748b; font-size: 14px; text-align: center;">
                    <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
                        <span class="material-symbols-outlined" style="font-size:36px; color:#94a3b8;">filter_alt_off</span>
                        <strong>لا توجد حركات مطابقة لمعايير الفلترة المحددة</strong>
                        <span style="font-size:12.5px; color:#94a3b8;">جرّب تعديل الفلاتر أو اضغط على "إعادة تعيين"</span>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = records.map(row => {
        const isUnassigned = !row.costCenterCode;
        const centerBadge = isUnassigned
            ? `<span class="badge-center unassigned"><span class="material-symbols-outlined" style="font-size:12px;">link_off</span> غير مربوط</span>`
            : `<span class="badge-center assigned">${row.costCenterName}</span>`;

        return `
            <tr class="${isUnassigned ? 'row-unassigned' : ''}">
                <td class="cell-num">${row.index}</td>
                <td class="cell-num">${row.displayDate}</td>
                <td class="cell-num">${row.serialNo}</td>
                <td class="cell-num">${row.entryNo}</td>
                <td class="cell-num">${row.docNo}</td>
                <td class="cell-desc">
                    ${row.description}
                    ${isUnassigned ? `<span style="color:#e11d48; font-size:11px; margin-right:4px;">(مصروف غير موزّع)</span>` : ''}
                </td>
                <td>${centerBadge}</td>
                <td class="cell-num" style="color: #0284c7;">${row.debit > 0 ? formatNumber(row.debit) : '0'}</td>
                <td class="cell-num" style="color: #059669;">${row.credit > 0 ? formatNumber(row.credit) : '0'}</td>
                <td class="cell-num" style="font-weight: 700;">${formatNumber(row.balance)}</td>
            </tr>
        `;
    }).join('');
}

// تحديث لوحة الإحصائيات والإجماليات لحظياً
function updateSummaryStats(records) {
    const totalDebit = records.reduce((sum, r) => sum + (r.debit || 0), 0);
    const totalCredit = records.reduce((sum, r) => sum + (r.credit || 0), 0);
    const balance = totalDebit - totalCredit;

    document.getElementById('boxDebit').textContent = formatNumber(totalDebit);
    document.getElementById('boxCredit').textContent = formatNumber(totalCredit);
    document.getElementById('boxBalance').textContent = formatNumber(balance);
    document.getElementById('boxCount').textContent = `${records.length} حركة`;

    document.getElementById('filterResultTag').textContent = `عرض ${records.length} من أصل ${fullTransactionsData.length} قيد`;
}

// تحديث عدد الحركات غير المربوطة
function updateUnassignedCountBadge() {
    const unassignedCount = fullTransactionsData.filter(r => !r.costCenterCode).length;
    const badge = document.getElementById('unassignedCountBadge');
    if (badge) badge.textContent = unassignedCount;
}

// تطبيق جميع الفلاتر المتقدمة (بما فيها الخيارات المتعددة)
function applyFilters() {
    const unassignedOnly = document.getElementById('chkUnassignedOnly').checked;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const minAmount = parseFloat(document.getElementById('numMinAmount').value) || null;
    const maxAmount = parseFloat(document.getElementById('numMaxAmount').value) || null;
    const keyword = document.getElementById('txtSearchKeyword').value.trim().toLowerCase();

    // تصفية البيانات
    let filtered = fullTransactionsData.filter(item => {
        // فلتر الحركات غير المربوطة
        if (unassignedOnly && item.costCenterCode !== null) {
            return false;
        }

        // فلتر مراكز التكلفة متعدد الخيارات
        if (selectedCenters.size > 0) {
            const itemCenterKey = item.costCenterCode ? item.costCenterCode : 'unassigned';
            if (!selectedCenters.has(itemCenterKey)) {
                return false;
            }
        }

        // فلتر الحسابات متعدد الخيارات
        if (selectedAccounts.size > 0) {
            if (!selectedAccounts.has(item.accountCode)) {
                return false;
            }
        }

        // فلتر التاريخ
        if (fromDate && item.date < fromDate) {
            return false;
        }
        if (toDate && item.date > toDate) {
            return false;
        }

        // فلتر البحث في المبلغ
        const itemAmount = Math.max(item.debit, item.credit);
        if (minAmount !== null && itemAmount < minAmount) {
            return false;
        }
        if (maxAmount !== null && itemAmount > maxAmount) {
            return false;
        }

        // فلتر البحث في النص / الوصف / رقم القيد
        if (keyword) {
            const matchDesc = item.description.toLowerCase().includes(keyword);
            const matchDoc = String(item.docNo).includes(keyword);
            const matchEntry = String(item.entryNo).includes(keyword);
            const matchCenter = (item.costCenterName || '').toLowerCase().includes(keyword);
            if (!matchDesc && !matchDoc && !matchEntry && !matchCenter) {
                return false;
            }
        }

        return true;
    });

    // تحديث ترويسة الحساب بالجدول
    updateAccountHeader();

    // حساب الرصيد التراكمي
    currentFilteredRecords = calculateBalances(filtered);

    // تحديث الجدول والإجماليات
    renderTable(currentFilteredRecords);
    updateSummaryStats(currentFilteredRecords);
    updateActiveFilterBadge();
}

// تحديث شارة الفلتر النشط
function updateActiveFilterBadge() {
    const badge = document.getElementById('activeFilterBadge');
    const unassignedOnly = document.getElementById('chkUnassignedOnly').checked;
    const minAmount = document.getElementById('numMinAmount').value;
    const maxAmount = document.getElementById('numMaxAmount').value;

    let activeTags = [];
    if (unassignedOnly) activeTags.push('المصروفات غير المربوطة');
    if (selectedCenters.size > 0) activeTags.push(`مراكز مختارة (${selectedCenters.size})`);
    if (selectedAccounts.size > 0) activeTags.push(`حسابات مختارة (${selectedAccounts.size})`);
    if (minAmount || maxAmount) activeTags.push('فلتر المبلغ');

    if (activeTags.length > 0) {
        badge.textContent = `فلاتر نشطة: ${activeTags.join(' • ')}`;
        badge.style.backgroundColor = '#fef3c7';
        badge.style.color = '#92400e';
        badge.style.borderColor = '#fcd34d';
    } else {
        badge.textContent = 'عرض الكل (بدون قيود)';
        badge.style.backgroundColor = '#e0f2fe';
        badge.style.color = '#0369a1';
        badge.style.borderColor = '#bae6fd';
    }
}

// تحديث ترويسة الحساب المعروض في الجدول
function updateAccountHeader() {
    const headerName = document.getElementById('accountHeaderName');
    const headerCode = document.getElementById('accountHeaderCode');

    if (selectedAccounts.size === 1) {
        const code = Array.from(selectedAccounts)[0];
        const match = fullTransactionsData.find(i => i.accountCode === code);
        if (match) {
            headerName.textContent = `اسم الحساب : ${match.accountName}`;
            headerCode.textContent = `رقم الحساب : ${match.accountCode}`;
        }
    } else if (selectedAccounts.size > 1) {
        headerName.textContent = `اسم الحساب : تم اختيار (${selectedAccounts.size}) حسابات محاسبية متعددة`;
        headerCode.textContent = `أرقام الحسابات : ${Array.from(selectedAccounts).join(', ')}`;
    } else {
        headerName.textContent = 'اسم الحساب : جميع الحسابات التفصيلية';
        headerCode.textContent = 'رقم الحساب : حسابات مراكز التكلفة المجمعة';
    }
}

// ================= إدارة القوائم المنسدلة المتعددة (Multi-Select Logic) =================
function setupMultiSelect(config) {
    const container = document.getElementById(config.containerId);
    const trigger = document.getElementById(config.triggerId);
    const display = document.getElementById(config.displayId);
    const panel = document.getElementById(config.panelId);
    const clearBtn = document.getElementById(config.clearBtnId);
    const searchInput = document.getElementById(config.searchInputId);
    const selectAllBtn = document.getElementById(config.selectAllBtnId);
    const deselectAllBtn = document.getElementById(config.deselectAllBtnId);
    const checkboxes = container.querySelectorAll('.multiselect-list input[type="checkbox"]');

    // فتح/إغلاق القائمة
    trigger.addEventListener('click', (e) => {
        if (e.target.closest('.clear-selection-btn')) return;
        const isOpen = panel.classList.contains('show');
        // إغلاق أي قوائم مفتوحة أخرى أولاً
        document.querySelectorAll('.multiselect-panel').forEach(p => p.classList.remove('show'));
        document.querySelectorAll('.multiselect-trigger').forEach(t => t.classList.remove('open'));

        if (!isOpen) {
            panel.classList.add('show');
            trigger.classList.add('open');
            if (searchInput) searchInput.focus();
        }
    });

    // منع إغلاق القائمة عند النقر بداخلها
    panel.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // إغلاق عند النقر خارج العنصر
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            panel.classList.remove('show');
            trigger.classList.remove('open');
        }
    });

    // تحديث الواجهة عند تغيير الاختيار
    function updateDisplay() {
        const selectedSet = config.selectedSet;
        if (selectedSet.size === 0) {
            display.innerHTML = `<span class="placeholder-text">${config.placeholder}</span>`;
            if (clearBtn) clearBtn.style.display = 'none';
        } else if (selectedSet.size === 1) {
            const val = Array.from(selectedSet)[0];
            const cb = Array.from(checkboxes).find(c => c.value === val);
            const label = cb ? (cb.getAttribute('data-label') || cb.value) : val;
            display.innerHTML = `<span class="ms-chip">${label}</span>`;
            if (clearBtn) clearBtn.style.display = 'flex';
        } else {
            display.innerHTML = `
                <span class="ms-chip-count">${selectedSet.size} مختارة</span>
                <span style="font-size: 11.5px; color: #475569; font-weight: 600;">(خيارات متعددة)</span>
            `;
            if (clearBtn) clearBtn.style.display = 'flex';
        }
    }

    // تفاعل المربعات (Checkboxes)
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                config.selectedSet.add(cb.value);
            } else {
                config.selectedSet.delete(cb.value);
            }
            updateDisplay();
            applyFilters();
        });
    });

    // زر تحديد الكل
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', () => {
            checkboxes.forEach(cb => {
                cb.checked = true;
                config.selectedSet.add(cb.value);
            });
            updateDisplay();
            applyFilters();
        });
    }

    // زر إلغاء التحديد
    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', () => {
            checkboxes.forEach(cb => {
                cb.checked = false;
            });
            config.selectedSet.clear();
            updateDisplay();
            applyFilters();
        });
    }

    // زر المسح السريع في شريط العرض
    if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            checkboxes.forEach(cb => cb.checked = false);
            config.selectedSet.clear();
            updateDisplay();
            applyFilters();
        });
    }

    // البحث داخل عناصر القائمة
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            const items = container.querySelectorAll('.multiselect-item');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(q) ? 'flex' : 'none';
            });
        });
    }

    return { updateDisplay, checkboxes };
}

// مسح قيمة حقل معين
function clearInput(id) {
    const el = document.getElementById(id);
    if (el) {
        el.value = '';
        el.focus();
        applyFilters();
    }
}

// إعادة تعيين جميع الفلاتر
function resetAllFilters() {
    document.getElementById('selView').value = 'detailed';
    document.getElementById('selYear').value = '2026';
    document.getElementById('selDatePreset').value = 'custom';
    document.getElementById('fromDate').value = '2026-01-01';
    document.getElementById('toDate').value = '2026-12-31';
    document.getElementById('chkUnassignedOnly').checked = false;
    document.getElementById('numMinAmount').value = '';
    document.getElementById('numMaxAmount').value = '';
    document.getElementById('selAmountPreset').value = 'all';
    document.getElementById('txtSearchKeyword').value = '';

    // مسح مراكز التكلفة المتعددة
    selectedCenters.clear();
    document.querySelectorAll('#multiCenterList input[type="checkbox"]').forEach(c => c.checked = false);
    document.getElementById('multiCenterDisplay').innerHTML = `<span class="placeholder-text">جميع مراكز التكلفة</span>`;
    document.getElementById('clearCenterBtn').style.display = 'none';

    // مسح الحسابات المتعددة
    selectedAccounts.clear();
    document.querySelectorAll('#multiAccountList input[type="checkbox"]').forEach(c => c.checked = false);
    document.getElementById('multiAccountDisplay').innerHTML = `<span class="placeholder-text">جميع الحسابات</span>`;
    document.getElementById('clearAccountBtn').style.display = 'none';

    applyFilters();
    showToast('تمت إعادة تعيين جميع الفلاتر');
}

// إظهار إشعار Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// تصدير النتائج الحالية إلى Excel
function exportToExcel() {
    let csv = '\uFEFF'; // BOM للعربية
    csv += 'م,التاريخ,الرقم المسلسل,رقم القيد,رقم المستند,شرح القيد,مركز التكلفة,مدين,دائن,الرصيد\n';

    currentFilteredRecords.forEach(r => {
        csv += `${r.index},${r.displayDate},${r.serialNo},${r.entryNo},${r.docNo},"${r.description}","${r.costCenterName}",${r.debit},${r.credit},${r.balance}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `تقرير_مراكز_التكلفة_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('تم تصدير البيانات المطابقة إلى Excel بنجاح');
}

// تهيئة الأحداث والتفاعل
document.addEventListener('DOMContentLoaded', () => {
    // إعداد القائمة المتعددة لمراكز التكلفة
    const centerMS = setupMultiSelect({
        containerId: 'multiCenterContainer',
        triggerId: 'multiCenterTrigger',
        displayId: 'multiCenterDisplay',
        panelId: 'multiCenterPanel',
        clearBtnId: 'clearCenterBtn',
        searchInputId: 'searchCenterInput',
        selectAllBtnId: 'selectAllCenters',
        deselectAllBtnId: 'deselectAllCenters',
        placeholder: 'جميع مراكز التكلفة',
        selectedSet: selectedCenters
    });

    // إعداد القائمة المتعددة للحسابات
    const accountMS = setupMultiSelect({
        containerId: 'multiAccountContainer',
        triggerId: 'multiAccountTrigger',
        displayId: 'multiAccountDisplay',
        panelId: 'multiAccountPanel',
        clearBtnId: 'clearAccountBtn',
        searchInputId: 'searchAccountInput',
        selectAllBtnId: 'selectAllAccounts',
        deselectAllBtnId: 'deselectAllAccounts',
        placeholder: 'جميع الحسابات',
        selectedSet: selectedAccounts
    });

    // حساب عدد الحركات غير المربوطة
    updateUnassignedCountBadge();

    // تطبيق الفلتر الابتدائي
    applyFilters();

    // زر تطبيق الفلتر
    document.getElementById('btnApplyFilter').addEventListener('click', () => {
        applyFilters();
        showToast('تم تطبيق الفلتر بنجاح');
    });

    // زر إعادة التعيين
    document.getElementById('btnResetFilter').addEventListener('click', resetAllFilters);

    // زر التحديث في الترويسة
    document.getElementById('btnSearch').addEventListener('click', () => {
        applyFilters();
        showToast('تم تحديث البيانات');
    });

    // زر التصدير
    document.getElementById('btnExport').addEventListener('click', exportToExcel);

    // تبديل فلتر المصروفات غير المربوطة
    const chkUnassigned = document.getElementById('chkUnassignedOnly');
    if (chkUnassigned) {
        chkUnassigned.addEventListener('change', () => {
            const unassignedCheckbox = document.querySelector('#multiCenterList input[value="unassigned"]');
            if (chkUnassigned.checked) {
                // تحديد فقط "غير مربوط" في قائمة المراكز
                centerMS.checkboxes.forEach(cb => {
                    cb.checked = (cb.value === 'unassigned');
                });
                selectedCenters.clear();
                selectedCenters.add('unassigned');
                centerMS.updateDisplay();
                showToast('عرض المصروفات الغير مربوطة بمراكز التكلفة');
            } else {
                if (unassignedCheckbox) unassignedCheckbox.checked = false;
                selectedCenters.delete('unassigned');
                centerMS.updateDisplay();
            }
            applyFilters();
        });
    }

    // فلترة أثناء الكتابة في البحث النصي
    const txtSearch = document.getElementById('txtSearchKeyword');
    if (txtSearch) {
        let debounceTimer;
        txtSearch.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(applyFilters, 250);
        });
    }

    // فترات التاريخ السريعة
    const selDatePreset = document.getElementById('selDatePreset');
    if (selDatePreset) {
        selDatePreset.addEventListener('change', (e) => {
            const val = e.target.value;
            const from = document.getElementById('fromDate');
            const to = document.getElementById('toDate');

            if (val === 'this_month') {
                from.value = '2026-01-01';
                to.value = '2026-01-31';
            } else if (val === 'q1') {
                from.value = '2026-01-01';
                to.value = '2026-03-31';
            } else if (val === 'first_half') {
                from.value = '2026-01-01';
                to.value = '2026-06-30';
            } else if (val === 'all') {
                from.value = '2026-01-01';
                to.value = '2026-12-31';
            }
            applyFilters();
        });
    }

    // نطاقات المبالغ السريعة
    const selAmountPreset = document.getElementById('selAmountPreset');
    if (selAmountPreset) {
        selAmountPreset.addEventListener('change', (e) => {
            const val = e.target.value;
            const min = document.getElementById('numMinAmount');
            const max = document.getElementById('numMaxAmount');

            if (val === 'small') {
                min.value = '0';
                max.value = '10000';
            } else if (val === 'medium') {
                min.value = '10000';
                max.value = '20000';
            } else if (val === 'large') {
                min.value = '20000';
                max.value = '';
            } else {
                min.value = '';
                max.value = '';
            }
            applyFilters();
        });
    }

    // تصفية عند تغيير المبالغ يدوياً
    ['numMinAmount', 'numMaxAmount', 'fromDate', 'toDate', 'selView', 'selYear'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', applyFilters);
    });
});
