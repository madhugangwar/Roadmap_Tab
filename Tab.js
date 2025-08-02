let tab1 =document.querySelector('.class1');
let tab2 =document.querySelector('.class2');
let tab3 =document.querySelector('.class3');
let tab4 =document.querySelector('.class4');
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let btn = document.getElementById('btn');

tab1.addEventListener("click", () => {
    para1.innerHTML= "Clicking each tab should should hide the content of the other tab and show the content of clicked tabBy default, enbale the first tab.";
    btn.innerHTML = "First Tab Content to be diplayed here"
    para2.innerHTML = "Add some dummy content or just add a simple text showing the tab"
})

tab2.addEventListener("click", () => {
    para1.innerHTML= " This overview gives a snapshot of what’s coming, outlining the structure, goals, and expected outcomes, providing users with a roadmap to follow during reading.";
    btn.innerHTML = "Second Tab Content to be diplayed here"
    para2.innerHTML = "Welcome to Tab 2! Here’s some dummy content for layout and testing purposes."
})

tab3.addEventListener("click", () => {
    para1.innerHTML= "The process section lists each step involved, describes how to carry them out, and includes advice or warnings to ensure things go smoothly and correctl";
    btn.innerHTML = "Third Tab Content to be diplayed here"
    para2.innerHTML = "This is Tab 3 content. Just a simple paragraph to represent placeholder text."
})

tab4.addEventListener("click", () => {
    para1.innerHTML= "After completing the steps, this tab shows what to expect, explains how to interpret the results, and provides tips for improving or troubleshooting the outcome.";
    btn.innerHTML = "Fourth Tab Content to be diplayed here"
    para2.innerHTML = "You’re now viewing Tab 4. This text is here to show tab functionality."
})



