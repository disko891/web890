// DB 연결 설정 — ⚠️ password를 본인 비밀번호로 수정
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "subjectid033",
  password: "subjectid033",
  database: "subjectdb033",
  connectionLimit: 5,
});

module.exports = pool;
