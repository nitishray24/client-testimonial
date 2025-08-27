const testimonials = [
    {
        name: "Samantha Reynolds",
        photourl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8Mg%3D%3D",
        text: "Nedhyam Textile Pvt. Ltd. offers a stunning collection of ladies garments that are not only trendy but also comfortable. I was impressed by the quality and variety of their products. The designs are elegant and perfect for any occasion."
    },
    {
        name: "Samantha Johnson",
        photourl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDI%3D",
        text: "I was amazed by the wide variety of stylish and high-quality ladies garments offered by Nedhyam Textile Pvt. Ltd. The exceptional craftsmanship and attention to detail in each piece truly set them apart from the rest. I highly recommend Nedhyam Textile Pvt. Ltd. for all your fashion needs."
    },
    {
        // name: "shaily jordan",
        photourl: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDI%3D",
        text: "Nedhyam Textile Pvt. Ltd. offers a stunning collection of ladies garments that exceed expectations. The quality and style are unmatched, making every woman feel confident and elegant. I highly recommend their exquisite designs to anyone searching for premium clothing."
    },
    {
        name: "Emily Evans",
        photourl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHVzZXJ8ZW58MHx8MHx8fDI%3D  ",
        text: "Nedhyam Textile Pvt. Ltd. offers a stunning collection of ladies garments that are not only trendy but also comfortable. I was impressed by the quality and variety of their products. The designs are elegant and perfect for any occasion."
    },
    {
        name: "Sophia Stevens",
        photourl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHVzZXJ8ZW58MHx8MHx8fDI%3D",
        text: "I am highly impressed with the quality and variety of ladies garments offered by Nedhyam Textile Pvt. Ltd. The unique designs and comfortable fabrics make them a must-have in every woman's wardrobe. I can't recommend them enough!"
    },
]

const imgE1 = document.querySelector(".img")
const textE1 = document.querySelector(".text")
const usernameE1 = document.querySelector(".username")

let idx = 0


function updatetestimonials() {
    const { name, photourl, text } = testimonials[idx];
    imgE1.src = photourl;
    textE1.innerHTML = text;
    usernameE1.innerHTML = name;
    idx++;
    if(idx >=testimonials.length){
        idx =0
    }
    setTimeout(() => {
        updatetestimonials()
    }, 2000);
};
updatetestimonials();
