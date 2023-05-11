const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const data = {
  departments: [
    {
      id: 01,
      name: "CSE(Artificial Intelligence AND Machine Learning)",
      logo: "logo.png",
      semesters: [
        {
          id: 1,
          name: "Fifth Semester[3-1]",
          subjects: [
            {
              id: 1,
              name: "Advanced Artificial Intelligence",
              chapters: [
                {
                  id: 1,
                  name: "UNIT-I ",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/139iksKh6bb07ZXBB_qonCim_mHiA3kxq",
                },
                {
                  id: 2,
                  name: "UNIT-II",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1WHuV90pat7vZn-aiRHO5s3hem83SYg0J",
                },
                {
                  id: 3,
                  name: "UNIT-III",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1jsv5ogowC0EnOJd19xPglCrqHcpHDNI4",
                },
                {
                  id: 4,
                  name: "UNIT-IV",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1a3W8XxaDvAk8Ik_Ool8vO5SpbwHO5XCE",
                },
                {
                  id: 5,
                  name: "UNIT-V",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1zcINe9kkeC6JF5wbpPEL4aSWmlVcu2g8",
                },
              ],
            },
            {
              id: 1,
              name: "STM",
              chapters: [
                {
                  id: 1,
                  name: "UNIT-I ",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1WZuhHd9owQLk4FOvMfVTe7A2FqJot2l5/view",
                },
                {
                  id: 2,
                  name: "UNIT-II",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1hq4BMLw9_UFy33dedYFSSupqbbXU5aa_/view",
                },
                {
                  id: 3,
                  name: "UNIT-III",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1efyuHWsXfwY_JNhCkOjiU81BQzm6APNJ/view",
                },
                {
                  id: 4,
                  name: "UNIT-IV",                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1xVa1l-M5yzqv7Olin7tJx42fITZWBoH5/view",
                },
                {
                  id: 5,
                  name: "UNIT-V",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/18ofJl4JtZoAAsIaqdRgjA6UH9kqRanes/view",
                },
              ],
            },
            {
              id: 2,
              name: "Computer Networks",
              chapters: [
                {
                  id: 1,
                  name: "UNIT-1",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1Rp3LFG8orxnx3fjCnwG94yfoiBU7LRbZ",
                },
                {
                  id: 2,
                  name: "UNIT-II",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1FeNyUpneXtzGL7FeSF5985CU5wlgKrwx",
                },
                {
                  id:3 ,
                  name: "UNIT-III",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1MEG13wwXT4dHjA5ken2JfUhNf54GDCzw",
                },  
                {
                  id: 4,
                  name: "UNIT-IV",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1bjCageyAOmBBboptAsWtRRXibk2BxAQx",
                },    {
                  id: 5,
                  name: "UNIT-V",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1BUVIsdgf5L2YfWe0krkfa85Hs8nGPQdE",
                }
              ],
            },
            {
              id: 3,
              name: "DataWarehousing and Data Mining",
              chapters: [
                {
                  id: 1,
                  name: "Unit-I",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1bH8nBSC0V8G8NwXhvv6U3zySrThF3qrP",
                },
                {
                  id: 2,
                  name: "Unit-II",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1wH4GxlDIEb51ihMkI-bhGL61gXvdExO7",
                },
                {
                  id: 3,
                  name: "Unit-III",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1zKrzlUltgritdEn7qVSbQ4kGTXDgIErC",
                },  {
                  id: 4,
                  name: "Unit-IV",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1FDwq0tjYTeSGh1WTubhFXsx-QgZoaEHK",
                },  {
                  id: 5,
                  name: "Unit-V",
                  description: "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/11Xgxkwgp-0llY3Hn8OQ1LSNT_g3uFuvN",
                },
              ],
            }
          ]
        },
        {
          id: 2,
          name: "Fifth Semester[3-2]",
          subjects: [
            {
              id: 1,
              name: "Machine Learning",
              chapters: [
                {
                  id: 1,
                  name: "Introduction to Machine Learning ",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1sylFPXTNIv8E58gjqXGdVlWvCxTyD_O0",
                },
                {
                  id: 2,
                  name: "Artificial Neural Networks",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1Z4_LXVqGgGeM-nb_xh89lmUzR6eUCrBV",
                },
                {
                  id: 3,
                  name: "Pointers and Memory Management",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1o3038LUTMNXlaRNJdd1ycUAQrND0W8Zg",
                },
                {
                  id: 4,
                  name: "Object-Oriented Programming Concepts",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1vdpaEORn9qFGUk8cP-jcbFUhUopKM4pE",
                },
                {
                  id: 5,
                  name: "Exception Handling",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1_9n0kOPqtlzqMhhC1E9MG6qHpdQEdxul",
                },
              ],
            },
            {
              id: 2,
              name: "Software Engineering",
              chapters: [
                {
                  id: 1,
                  name: "Introduction to Software Engineering",
                  description: "https://mdisk.pro/SE-UNIT-I",
                },
                {
                  id: 2,
                  name: "Software Requirements",
                  description: "https://mdisk.pro/SE-UNIT-II",
                },
              ],
            },
            {
              id: 2,
              name: "FIOT",
              chapters: [
                {
                  id: 1,
                  name: "Unit-1",
                  description: "https://mdisk.pro/FIOT-UNIT-I",
                },
                {
                  id: 2,
                  name: "Unit-2",
                  description: "https://mdisk.pro/FIOT-UNIT-II",
                },
              ],
            },
          ],
        },
        {
          id: 1,
          name: "Sixth Semester[3-2]",
          subjects: [
            {
              id: 1,
              name: "Machine Learning",
              chapters: [
                {
                  id: 1,
                  name: "Introduction to Machine Learning ",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1sylFPXTNIv8E58gjqXGdVlWvCxTyD_O0",
                },
                {
                  id: 2,
                  name: "Artificial Neural Networks",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1Z4_LXVqGgGeM-nb_xh89lmUzR6eUCrBV",
                },
                {
                  id: 3,
                  name: "Pointers and Memory Management",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1o3038LUTMNXlaRNJdd1ycUAQrND0W8Zg",
                },
                {
                  id: 4,
                  name: "Object-Oriented Programming Concepts",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1vdpaEORn9qFGUk8cP-jcbFUhUopKM4pE",
                },
                {
                  id: 5,
                  name: "Exception Handling",
                  description:
                    "https://omegalinks.in/st?api=047357b11a31a7f79fa7ae627cfe1b23b143224e&url=https://drive.google.com/file/d/1_9n0kOPqtlzqMhhC1E9MG6qHpdQEdxul",
                },
              ],
            },
            {
              id: 2,
              name: "Software Engineering",
              chapters: [
                {
                  id: 1,
                  name: "Introduction to Software Engineering",
                  description: "https://mdisk.pro/SE-UNIT-I",
                },
                {
                  id: 2,
                  name: "Software Requirements",
                  description: "https://mdisk.pro/SE-UNIT-II",
                },
              ],
            },
            {
              id: 2,
              name: "FIOT",
              chapters: [
                {
                  id: 1,
                  name: "Unit-1",
                  description: "https://mdisk.pro/FIOT-UNIT-I",
                },
                {
                  id: 2,
                  name: "Unit-2",
                  description: "https://mdisk.pro/FIOT-UNIT-II",
                },
              ],
            },
          ],
        }
      ],
    },
  ],
};

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

app.get("/departments", (req, res) => {
  res.json(data.departments);
});

app.get("/departments/:departmentId", (req, res) => {
  const departmentId = parseInt(req.params.departmentId);
  const department = data.departments.find(
    (department) => department.id === departmentId
  );

  if (!department) {
    res.status(404).json({ message: "Department not found" });
  } else {
    res.json(department);
  }
});

app.get("/departments/:departmentId/semesters", (req, res) => {
  const departmentId = Number(req.params.departmentId);
  const department = data.departments.find((d) => d.id === departmentId);
  if (!department) {
    res.status(404).send("Department not found");
    return;
  }
  const semesters = department.semesters;
  res.json(semesters);
});

app.get("/departments/:departmentId/semesters/:semesterId", (req, res) => {
  const departmentId = Number(req.params.departmentId);
  const semesterId = Number(req.params.semesterId);
  const department = data.departments.find((d) => d.id === departmentId);
  if (!department) {
    res.status(404).send("Department not found");
    return;
  }
  const semester = department.semesters.find((s) => s.id === semesterId);
  if (!semester) {
    res.status(404).send("Semester not found");
    return;
  }
  res.json(semester);
});

app.get(
  "/departments/:departmentId/semesters/:semesterId/subjects",
  (req, res) => {
    const departmentId = Number(req.params.departmentId);
    const semesterId = Number(req.params.semesterId);
    const department = data.departments.find((d) => d.id === departmentId);
    if (!department) {
      res.status(404).send("Department not found");
      return;
    }
    const semester = department.semesters.find((s) => s.id === semesterId);
    if (!semester) {
      res.status(404).send("Semester not found");
      return;
    }
    const subjects = semester.subjects;
    res.json(subjects);
  }
);

app.get(
  "/departments/:departmentId/semesters/:semesterId/subjects/:subjectId",
  (req, res) => {
    const departmentId = Number(req.params.departmentId);
    const semesterId = Number(req.params.semesterId);
    const subjectId = Number(req.params.subjectId);
    const department = data.departments.find((d) => d.id === departmentId);
    if (!department) {
      res.status(404).send("Department not found");
      return;
    }
    const semester = department.semesters.find((s) => s.id === semesterId);
    if (!semester) {
      res.status(404).send("Semester not found");
      return;
    }
    const subject = semester.subjects.find((s) => s.id === subjectId);
    if (!subject) {
      res.status(404).send("Subject not found");
      return;
    }
    res.json(subject);
  }
);

app.get(
  "/departments/:departmentId/semesters/:semesterId/subjects/:subjectId/chapters",
  (req, res) => {
    const departmentId = Number(req.params.departmentId);
    const semesterId = Number(req.params.semesterId);
    const subjectId = Number(req.params.subjectId);
    const department = data.departments.find((d) => d.id === departmentId);
    if (!department) {
      res.status(404).send("Department not found");
      return;
    }
    const semester = department.semesters.find((s) => s.id === semesterId);
    if (!semester) {
      res.status(404).send("Semester not found");
      return;
    }
    const subject = semester.subjects.find((s) => s.id === subjectId);
    if (!subject) {
      res.status(404).send("Subject not found");
      return;
    }
    const chapters = subject.chapters;
    res.json(chapters);
  }
);

app.get(
  "/departments/:departmentId/semesters/:semesterId/subjects/:subjectId/chapters/:chapterId",
  (req, res) => {
    const departmentId = Number(req.params.departmentId);
    const semesterId = Number(req.params.semesterId);
    const subjectId = Number(req.params.subjectId);
    const chapterId = Number(req.params.chapterId);
    const department = data.departments.find((d) => d.id === departmentId);
    if (!department) {
      res.status(404).send("Department not found");
      return;
    }
    const semester = department.semesters.find((s) => s.id === semesterId);
    if (!semester) {
      res.status(404).send("Semester not found");
      return;
    }
    const subject = semester.subjects.find((s) => s.id === subjectId);
    if (!subject) {
      res.status(404).send("Subject not found");
      return;
    }
    const chapter = subject.chapters.find((c) => c.id === chapterId);
    if (!chapter) {
      res.status(404).send("Chapter not found");
      return;
    }
    res.json(chapter);
  }
);

//port
const PORT = process.env.PORT || 5000;

console.log("started");

// app.listen(PORT, () => [console.log(`listening to the ${PORT}`)]);
