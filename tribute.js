function saveTribute() {
let title = document.getElementById('title').value;
let name = document.getElementById('name').value;
let relations = document.getElementById('Relations').value;
let tribute = document.getElementById('tribute').value;

document.cookie = `title=${encodeURIComponent(title)}; path=/; max-age=${7*24*60*60}`;
document.cookie = `name=${encodeURIComponent(name)}; path=/; max-age=${7*24*60*60}`;
document.cookie = `relations=${encodeURIComponent(relations)}; path=/; max-age=${7*24*60*60}`;
document.cookie = `tribute=${encodeURIComponent(tribute)}; path=/; max-age=${7*24*60*60}`;
}
