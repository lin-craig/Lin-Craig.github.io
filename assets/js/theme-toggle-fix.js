(() => {
  const themeIcon = document.getElementById("theme-icon");
  const toggle = document.getElementById("theme-toggle");
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const storedTheme = () => {
    const value = localStorage.getItem("theme");
    return value === "dark" || value === "light" || value === "system" ? value : "system";
  };

  const computedTheme = () => {
    const value = storedTheme();
    return value === "system" ? (mediaQuery.matches ? "dark" : "light") : value;
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeIcon?.classList.remove("fa-sun");
      themeIcon?.classList.add("fa-moon");
    } else {
      document.documentElement.removeAttribute("data-theme");
      themeIcon?.classList.remove("fa-moon");
      themeIcon?.classList.add("fa-sun");
    }
  };

  applyTheme(computedTheme());

  mediaQuery.addEventListener("change", () => {
    if (storedTheme() === "system") {
      applyTheme(computedTheme());
    }
  });

  toggle?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const nextTheme = computedTheme() === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    },
    true
  );
})();
