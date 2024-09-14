<template>
    <footer class="container-fluid">
            <div class="row">
                <div class="footer">
                <p class="lead">Aakifah Palekar &copy; <span class="shadow">{{ cYear }}</span></p>
            </div>
        </div>
        </footer>
    </template>
    
    <script>
    export default {
        name: "FooterComp",
        data() {
            return {
                cYear: new Date().getUTCFullYear()
            }
        }
    }
    </script>
    
    <style scoped>
    .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgb(54, 97, 146) 20%, rgb(112, 160, 216)100%);
    text-shadow: 2px 2px 5px #3d3d3d;
    padding: 10px 0;
    margin: 0;
    width: 100%;
    flex-direction: column;
    font-family: "Playfair Display", serif;
    color: #e3e3e3;
    }
    </style>