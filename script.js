```javascript
// Arena IDs
const REPORT_SURVEY_ID = "019a46ef-f7dd-0000-58be-14fbb8b91d15";
const MESSAGE_ID = "019ea0b1-4cb7-7edb-bb47-5063c48ffdd7";
const EVALUATION_SESSION_ID = "019e8b3e-b0ab-72c3-a02e-7198cf970860";

const getStorageKey = (prefix) => `${prefix}_${MESSAGE_ID}`;

const hasStorageKey = (prefix) =>
    !!localStorage.getItem(getStorageKey(prefix));

// Focus iframe after loading
const iframe = document.getElementById("preview-iframe");

iframe.addEventListener("load", () => {
    iframe.focus();
});
```
