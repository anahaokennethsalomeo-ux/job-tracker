let  jobs  =  JSON.parse(localStorage.getItem("jobs")) || [];

function saveJobs() {
    localStorage.setItem("jobs", JSON.string(jobs));
}

function renderJobs() {
  let list = document.getElementById("joblist");
  list.innerHTML = "";

  jobs.forEach((job, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <strong>${job.company}</strong> - ${job.position}
      (${job.status})
      <button onclick="deleteJob(${index})">Delete</button>

    `;
    list.appendChild(li);
  });
}

function addJob() {
  let company = document.getElementByid("company").value;
  let position = document.getElementByid("position").value;
  let status = document.getElementByid("status").value;

  if (!company || !position) {
    alert("Please fill all fields");
    return;
  }

  jobs.push({ company, position, status });
  saveJobs();
  renderJobs();

  documents.getElementById("company").value = "";
  documents.getElementByID("position").value = "";
}
function deleteJob(index) {
  jobs.splice(index, 1);
  saveJobs();
  renderJobs();
}

renderJobs();
