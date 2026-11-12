import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

type IconName =
  | "home"
  | "card"
  | "target"
  | "repeat"
  | "chart"
  | "settings"
  | "plus"
  | "arrowUp"
  | "arrowDown"
  | "chevron"
  | "search"
  | "bell"
  | "eye"
  | "moon"
  | "sun"
  | "close"
  | "coffee"
  | "cart"
  | "car"
  | "bag"
  | "bolt";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9M9 20v-7h6v7" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  repeat: (
    <>
      <path d="M17 2l3 3-3 3" />
      <path d="M3 11V9a4 4 0 0 1 4-4h13M7 22l-3-3 3-3" />
      <path d="M21 13v2a4 4 0 0 1-4 4H4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19V2" />
      <path d="M2 19h22" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.6v-.1A1.7 1.7 0 0 0 8.5 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3v-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.5V3h4v.1A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.5 1h.1v4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  arrowUp: (
    <>
      <path d="m18 15-6-6-6 6" />
      <path d="M12 9v12" />
    </>
  ),
  arrowDown: (
    <>
      <path d="m6 9 6 6 6-6" />
      <path d="M12 3v12" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  moon: <path d="M20.5 14.2A8.2 8.2 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  coffee: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 10h1a3 3 0 0 1 0 6h-2M7 4h7" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 4h2l2.5 11h11l2-7H6" />
    </>
  ),
  car: (
    <>
      <path d="m5 16-1 2v2h3v-2h10v2h3v-2l-1-2-2-6H7l-2 6Z" />
      <path d="M6 16h12M8 13h.01M16 13h.01" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l1 13H5L6 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>
  ),
  bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const nav = [
  ["home", "Overview"],
  ["card", "Transactions"],
  ["target", "Budgets"],
  ["repeat", "Recurring"],
  ["chart", "Analytics"],
] as [IconName, string][];

const initialTransactions = [
  {
    icon: "cart" as IconName,
    name: "Whole Foods Market",
    category: "Groceries",
    date: "Today, 10:24 AM",
    amount: 84.32,
    color: "mint",
  },
  {
    icon: "coffee" as IconName,
    name: "The Daily Grind",
    category: "Dining",
    date: "Today, 8:12 AM",
    amount: 6.75,
    color: "peach",
  },
  {
    icon: "car" as IconName,
    name: "Uber",
    category: "Transport",
    date: "Yesterday, 7:42 PM",
    amount: 24.18,
    color: "blue",
  },
  {
    icon: "bag" as IconName,
    name: "Uniqlo",
    category: "Shopping",
    date: "Jun 18, 3:18 PM",
    amount: 68.9,
    color: "purple",
  },
];

const budgetData = [
  { label: "Groceries", used: 342, total: 500, color: "#167a5a" },
  { label: "Dining out", used: 184, total: 250, color: "#ee7b4f" },
  { label: "Transport", used: 96, total: 200, color: "#5b72d6" },
];

export default function App() {
  const [active, setActive] = useState("Overview");
  const [month, setMonth] = useState(1);
  const [visible, setVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem("clarity-theme") === "dark",
  );
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState("");
  const [transactions, setTransactions] = useState(initialTransactions);
  const months = ["May 2025", "June 2025", "July 2025"];
  const spent = useMemo(
    () => transactions.reduce((sum, item) => sum + item.amount, 0),
    [transactions],
  );

  useEffect(() => {
    window.localStorage.setItem("clarity-theme", darkMode ? "dark" : "light");
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  function addExpense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const amount = Number(data.get("amount"));
    const merchant = String(data.get("merchant") || "New expense");
    if (!amount) return;
    setTransactions([
      {
        icon: "bolt",
        name: merchant,
        category: String(data.get("category")),
        date: "Just now",
        amount,
        color: "mint",
      },
      ...transactions,
    ]);
    setModal(false);
    setToast("Expense added successfully");
    window.setTimeout(() => setToast(""), 2600);
  }

  return (
    <div className={`app-shell${darkMode ? " dark-theme" : ""}`}>
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <span />
          </span>
          <span>Clarity</span>
        </div>
        <nav className="nav-list" aria-label="Main navigation">
          {nav.map(([icon, label]) => (
            <button
              key={label}
              className={active === label ? "nav-item active" : "nav-item"}
              onClick={() => setActive(label)}
            >
              <Icon name={icon} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item" onClick={() => setActive("Settings")}>
            <Icon name="settings" />
            <span>Settings</span>
          </button>
          <div className="privacy-card">
            <div className="privacy-icon">
              <Icon name="target" size={16} />
            </div>
            <strong>Your data stays yours</strong>
            <p>Everything is stored locally on this device.</p>
          </div>
          <div className="profile">
            <div className="avatar">AM</div>
            <div>
              <strong>Alex Morgan</strong>
              <span>Personal account</span>
            </div>
            <Icon name="chevron" size={15} />
          </div>
        </div>
      </aside>

      <main>
        <header className="topbar">
          <div className="mobile-brand brand">
            <span className="brand-mark">
              <span />
            </span>
            <span>Clarity</span>
          </div>
          <div className="top-actions">
            <button className="icon-btn" aria-label="Search">
              <Icon name="search" />
            </button>
            <button
              className="icon-btn theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDarkMode(!darkMode)}
            >
              <Icon name={darkMode ? "sun" : "moon"} />
            </button>
            <button className="icon-btn notification" aria-label="Notifications">
              <Icon name="bell" />
              <i />
            </button>
            <button className="add-btn" onClick={() => setModal(true)}>
              <Icon name="plus" size={17} /> Add expense
            </button>
          </div>
        </header>

        <div className="content">
          {active === "Overview" ? (
            <>
              <section className="welcome">
                <div>
                  <p className="eyebrow">FINANCIAL OVERVIEW</p>
                  <h1>Good morning, Alex.</h1>
                  <p>Here’s what’s happening with your money this month.</p>
                </div>
                <div className="month-switcher">
                  <button
                    onClick={() => setMonth(Math.max(0, month - 1))}
                    aria-label="Previous month"
                  >
                    <Icon name="chevron" />
                  </button>
                  <span>{months[month]}</span>
                  <button
                    onClick={() => setMonth(Math.min(months.length - 1, month + 1))}
                    aria-label="Next month"
                  >
                    <Icon name="chevron" />
                  </button>
                </div>
              </section>

              <section className="stat-grid">
                <article className="stat-card balance-card">
                  <div className="stat-top">
                    <span>Available balance</span>
                    <button
                      onClick={() => setVisible(!visible)}
                      aria-label="Toggle balance visibility"
                    >
                      <Icon name="eye" size={17} />
                    </button>
                  </div>
                  <strong>{visible ? "$4,280.65" : "••••••••"}</strong>
                  <div className="trend positive">
                    <span>
                      <Icon name="arrowUp" size={12} /> 8.4%
                    </span>{" "}
                    from last month
                  </div>
                  <div className="balance-spark" aria-hidden="true">
                    <svg viewBox="0 0 260 50" preserveAspectRatio="none">
                      <path d="M0 41 C25 35, 33 39, 54 27 S88 34,110 22 S145 29,166 15 S205 22,226 9 S248 10,260 3" />
                    </svg>
                  </div>
                </article>
                <article className="stat-card">
                  <div className="stat-top">
                    <span>Income</span>
                    <div className="stat-icon income">
                      <Icon name="arrowDown" size={15} />
                    </div>
                  </div>
                  <strong>{visible ? "$6,840.00" : "••••••"}</strong>
                  <div className="trend positive">
                    <span>
                      <Icon name="arrowUp" size={12} /> 12.2%
                    </span>{" "}
                    from last month
                  </div>
                </article>
                <article className="stat-card">
                  <div className="stat-top">
                    <span>Expenses</span>
                    <div className="stat-icon expense">
                      <Icon name="arrowUp" size={15} />
                    </div>
                  </div>
                  <strong>{visible ? `$${(2560 + spent * 0.02).toFixed(2)}` : "••••••"}</strong>
                  <div className="trend negative">
                    <span>
                      <Icon name="arrowDown" size={12} /> 3.1%
                    </span>{" "}
                    from last month
                  </div>
                </article>
                <article className="stat-card">
                  <div className="stat-top">
                    <span>Savings rate</span>
                    <div className="stat-icon saving">
                      <Icon name="target" size={15} />
                    </div>
                  </div>
                  <strong>62.6%</strong>
                  <div className="trend positive">
                    <span>
                      <Icon name="arrowUp" size={12} /> 4.8%
                    </span>{" "}
                    from last month
                  </div>
                </article>
              </section>

              <section className="dashboard-grid">
                <article className="panel spending-panel">
                  <div className="panel-head">
                    <div>
                      <h2>Spending overview</h2>
                      <p>Your daily expenses this month</p>
                    </div>
                    <button className="select-button">
                      This month <span>⌄</span>
                    </button>
                  </div>
                  <div className="chart-wrap">
                    <div className="chart-y">
                      <span>$300</span>
                      <span>$200</span>
                      <span>$100</span>
                      <span>$0</span>
                    </div>
                    <svg
                      className="area-chart"
                      viewBox="0 0 720 220"
                      preserveAspectRatio="none"
                      aria-label="Monthly spending chart"
                    >
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#15805d" stopOpacity=".28" />
                          <stop offset="1" stopColor="#15805d" stopOpacity=".02" />
                        </linearGradient>
                      </defs>
                      <path className="grid-line" d="M0 20H720M0 80H720M0 140H720M0 200H720" />
                      <path
                        className="area"
                        d="M0 200 L0 151 C30 142 45 156 73 138 S110 100 140 123 S183 148 213 116 S256 84 286 111 S332 142 360 118 S404 64 433 89 S475 122 505 96 S545 45 575 72 S618 98 647 69 S688 52 720 29 L720 200Z"
                      />
                      <path
                        className="line"
                        d="M0 151 C30 142 45 156 73 138 S110 100 140 123 S183 148 213 116 S256 84 286 111 S332 142 360 118 S404 64 433 89 S475 122 505 96 S545 45 575 72 S618 98 647 69 S688 52 720 29"
                      />
                      <circle cx="575" cy="72" r="5" />
                    </svg>
                    <div className="chart-x">
                      <span>Jun 1</span>
                      <span>Jun 6</span>
                      <span>Jun 12</span>
                      <span>Jun 18</span>
                      <span>Jun 24</span>
                      <span>Jun 30</span>
                    </div>
                  </div>
                </article>

                <article className="panel budget-panel">
                  <div className="panel-head">
                    <div>
                      <h2>Monthly budget</h2>
                      <p>$1,178 left to spend</p>
                    </div>
                    <button className="text-button" onClick={() => setActive("Budgets")}>
                      Manage
                    </button>
                  </div>
                  <div className="donut-row">
                    <div className="donut">
                      <div>
                        <strong>58%</strong>
                        <span>used</span>
                      </div>
                    </div>
                    <div className="donut-copy">
                      <span>Total budget</span>
                      <strong>$2,800</strong>
                      <small>$1,622 spent</small>
                    </div>
                  </div>
                  <div className="budget-list">
                    {budgetData.map((item) => (
                      <div className="budget-item" key={item.label}>
                        <div>
                          <span>{item.label}</span>
                          <strong>
                            ${item.used} <small>/ ${item.total}</small>
                          </strong>
                        </div>
                        <div className="progress">
                          <i
                            style={{
                              width: `${(item.used / item.total) * 100}%`,
                              background: item.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel transactions-panel">
                  <div className="panel-head">
                    <div>
                      <h2>Recent transactions</h2>
                      <p>Your latest activity</p>
                    </div>
                    <button className="text-button" onClick={() => setActive("Transactions")}>
                      View all <Icon name="chevron" size={14} />
                    </button>
                  </div>
                  <div className="transaction-list">
                    {transactions.slice(0, 4).map((item, index) => (
                      <div className="transaction" key={`${item.name}-${index}`}>
                        <div className={`transaction-icon ${item.color}`}>
                          <Icon name={item.icon} size={18} />
                        </div>
                        <div className="transaction-name">
                          <strong>{item.name}</strong>
                          <span>
                            {item.category} · {item.date}
                          </span>
                        </div>
                        <strong className="amount">−${item.amount.toFixed(2)}</strong>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel categories-panel">
                  <div className="panel-head">
                    <div>
                      <h2>Top categories</h2>
                      <p>Where your money went</p>
                    </div>
                    <button className="icon-btn small" aria-label="More options">
                      •••
                    </button>
                  </div>
                  <div className="category-content">
                    <div className="category-donut">
                      <div />
                    </div>
                    <div className="legend">
                      <div>
                        <i className="l1" />
                        <span>Housing</span>
                        <strong>38%</strong>
                      </div>
                      <div>
                        <i className="l2" />
                        <span>Groceries</span>
                        <strong>24%</strong>
                      </div>
                      <div>
                        <i className="l3" />
                        <span>Dining</span>
                        <strong>16%</strong>
                      </div>
                      <div>
                        <i className="l4" />
                        <span>Other</span>
                        <strong>22%</strong>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </>
          ) : (
            <section className="placeholder-view">
              <p className="eyebrow">PERSONAL FINANCE</p>
              <h1>{active}</h1>
              <p>
                {active === "Transactions"
                  ? "Review and search all of your recent spending activity."
                  : `Your ${active.toLowerCase()} workspace is ready.`}
              </p>
              {active === "Transactions" && (
                <div className="panel full-list">
                  {transactions.map((item, index) => (
                    <div className="transaction" key={index}>
                      <div className={`transaction-icon ${item.color}`}>
                        <Icon name={item.icon} />
                      </div>
                      <div className="transaction-name">
                        <strong>{item.name}</strong>
                        <span>
                          {item.category} · {item.date}
                        </span>
                      </div>
                      <strong className="amount">−${item.amount.toFixed(2)}</strong>
                    </div>
                  ))}
                </div>
              )}
              {active !== "Transactions" && (
                <button className="add-btn page-action" onClick={() => setActive("Overview")}>
                  Back to overview
                </button>
              )}
            </section>
          )}
        </div>
      </main>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {nav.slice(0, 4).map(([icon, label]) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={active === label ? "active" : ""}
          >
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {modal && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setModal(false)}>
          <form
            className="expense-modal"
            onSubmit={addExpense}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <p className="eyebrow">NEW TRANSACTION</p>
                <h2>Add an expense</h2>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setModal(false)}
                aria-label="Close"
              >
                <Icon name="close" />
              </button>
            </div>
            <label>
              Merchant
              <input name="merchant" placeholder="e.g. Farmers Market" autoFocus required />
            </label>
            <div className="form-row">
              <label>
                Amount
                <div className="amount-input">
                  <span>$</span>
                  <input
                    name="amount"
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                </div>
              </label>
              <label>
                Category
                <select name="category">
                  <option>Groceries</option>
                  <option>Dining</option>
                  <option>Transport</option>
                  <option>Shopping</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <button className="add-btn submit-btn" type="submit">
              Add expense
            </button>
          </form>
        </div>
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
