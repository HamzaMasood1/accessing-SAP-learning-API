const xhr = new XMLHttpRequest();
const url='https://open.sap.com/api/v2/courses?include=user_enrollment';
xhr.open("GET", url);
xhr.responseType = 'text';
xhr.send();

xhr.onreadystatechange = (e) => {
  //console.log(xhr.responseText)
  courseInfo = JSON.parse(xhr.responseText);
  var output="";
  for(var i = 0; i<courseInfo.data.length; i++){
    output+="<p>TITLE: " +courseInfo.data[i].attributes.title + "</p>";
    output+="<p>start: " +courseInfo.data[i].attributes.start_at + "</p>";
    output+="<p>end: " +courseInfo.data[i].attributes.end_at; + "</p>";
    output+="<p>language: " +courseInfo.data[i].attributes.language + "</p>";
    output+="<p>categories: " +courseInfo.data[i].attributes.classifiers.category + "</p>";
    output+="<p>topic: " +courseInfo.data[i].attributes.classifiers.topic + "</p>";
    output+="<p>teacher: " +courseInfo.data[i].attributes.teachers + "</p>";
    output+="<p>description: " +courseInfo.data[i].attributes.abstract + "</p>";
    output+="<p>================================================================================</p>";

  }
  document.getElementById('title').innerHTML = output;

}