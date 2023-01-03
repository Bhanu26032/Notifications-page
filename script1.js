function myfunction(){
    document.getElementById("notifications-counter").innerText=0;
    const boxes = document.querySelectorAll('.to-read');
    boxes.forEach(box => {
        box.style.backgroundColor ='white';
      });
}