class Form {
    constructor(){
        this.name= createInput("Name");
        this.standard=createInput("Class");
        this.english=createInput("English marks");
        this.physics=createInput("Physics marks");
        this.chemistry=createInput("Chemistry marks");
        this.biology=createInput("Biology marks");
        this.maths=createInput("Maths marks");
        this.button=createButton("Submit");
    }
    display(){
        var title=createElement('h1');
        title.html("Career Advisor");
        title.position(displayWidth/2-120,10);

        //giving positions to the different textboxes
        this.name.position(displayWidth/2-100,80);
        this.standard.position(displayWidth/2-100,120);
        this.english.position(displayWidth/2-100,160);
        this.physics.position(displayWidth/2-100,200);
        this.chemistry.position(displayWidth/2-100,240);
        this.biology.position(displayWidth/2-100,280);
        this.maths.position(displayWidth/2-100,320);
        this.button.position(displayWidth/2-50,350);

        this.button.mousePressed(()=>{
            this.maths.hide();
            this.name.hide();
            this.standard.hide();
            this.english.hide();
            this.physics.hide();
            this.chemistry.hide();
            this.biology.hide();
            this.button.hide();
            suggest=new Suggestions();
            suggest.name=this.name.value();
            suggest.maths=this.maths.value();
            suggest.english=this.english.value();
            suggest.physics=this.physics.value();
            suggest.chemistry=this.chemistry.value();
            suggest.biology=this.biology.value();
            //destroying other sprites
            doctor.destroy();
            lawyer.destroy();
            literature.destroy();
            suggest.display();
        })

    }
}