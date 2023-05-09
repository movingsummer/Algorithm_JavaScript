function solution(id_list, report, k) {
    report = Array.from(new Set(report))
  const reported = new Map();
  const obj = {};
  id_list.forEach((v) => {
    obj[v] = [];
    reported.set(v, 0);
  });
  report.forEach((item) => {
    const [name1, name2] = item.split(' ');
    obj[name1].push(name2);
    reported.set(name2, reported.get(name2) + 1);
  });

  return id_list.map(
    (name) => obj[name].filter((v) => reported.get(v) >= k).length
  );
}