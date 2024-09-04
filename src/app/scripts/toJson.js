export function jsonSyntax(json, tabNumber) {
  const keys = Object.keys(json);
  const leftCurlyBraket = `<span style="color:#E6B673;">&#123;</span>`;
  const rightCurlyBraket = `<span style="color:#E6B673">&#125;</span>`;
  const apostrof = `<span style="color:#999">&#34;</span>`;
  const coma = `<span style="color:#999">&#44;</span>`;
  const tab = `<span style="color:#fff1">----</span>`;

  let i = tabNumber;
  let result = `${leftCurlyBraket} </br> ${tab.repeat(i)}`;
  let umbdedJson = false;
  let res;
  keys.map((key) => {
    umbdedJson = typeof json[key] === "object" ? true : false;
    res =
      umbdedJson === true
        ? `${jsonSyntax(json[key], i+1 )}`
        : `${apostrof}<span style="color:#AAD94C ;">${json[key]}</span>${apostrof}`;
    result += `${apostrof}<span style="color:#FF8F40;">${key}</span>${apostrof}:${res}${coma}</br> ${tab.repeat(i)}`;
  });
  result += `${rightCurlyBraket}`;
  return result;
}
