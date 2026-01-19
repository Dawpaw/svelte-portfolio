<div class="absolute inset-0 -z-50 overflow-hidden">
    <div class="particles"></div>
</div>

<style>
.particles::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: float 60s linear infinite;
}

@keyframes float {
    from { transform: translateY(0); }
    to { transform: translateY(-200px); }
}
</style>
