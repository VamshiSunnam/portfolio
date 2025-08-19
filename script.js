body { 
    font-family: 'Inter', sans-serif; 
    background-color: #f8f7f4; 
    color: #4a4a4a; 
}
.warm-neutral-bg { background-color: #f8f7f4; }
.warm-neutral-card { background-color: #ffffff; }
.accent-color { color: #2563eb; }
.accent-bg { background-color: #2563eb; }
.subtle-accent-bg { background-color: #eff6ff; }
.chart-container { 
    position: relative; 
    width: 100%; 
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
    height: 300px; 
    max-height: 400px; 
}
@media (min-width: 768px) { 
    .chart-container { 
        height: 350px; 
    } 
}
.timeline-item { border-left: 3px solid #dbeafe; }
.timeline-dot { 
    left: -10px; 
    top: 50%; 
    transform: translateY(-50%); 
}
.skill-card.active { 
    background-color: #2563eb; 
    color: white; 
}
.skill-card.inactive { opacity: 0.5; }