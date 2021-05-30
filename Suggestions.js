class Suggestions{
    constructor(){
        this.english=null;
        this.physics=null;
        this.chemistry=null;
        this.biology=null;
        this.maths=null;
        this.suggestion=null;
        // here I have loaded the Images for Science stream
        this.engineerImg=loadImage("science/aeronauticEngineer.jpg");
        this.chemistImg=loadImage("science/pharma.jpg");
        this.oceanologist=loadImage("science/oceanography.jpg");
        this.foreinsic=loadImage("science/foreinsicToxico.gif");
        this.electricImg=loadImage("science/elecEngineer.jpg");
        this.compEngineerImg=loadImage("science/compEngineer.png");
        this.chemEngineer=loadImage("science/chemEngineer.PNG");
        this.enviScience=loadImage("science/enviScience.png");
        this.mechanicImg=loadImage("science/mechaniEngineer.jpg");
        this.neurologist=loadImage("science/neurologist.jpg");
        this.geneticsImg=loadImage("science/genetics.jpg");
        this.doctorImg=loadImage("science/doctor.jpg");
        this.geophy=loadImage("science/geophysics.jpg");
        this.physic=loadImage("science/physicist.jpg");
        this.meteor=loadImage("science/meteorology.png");
        this.astro=loadImage("science/astronomer.jpg");
        this.arc=loadImage("science/architect.jpg");
        // here I have loaded the images of Commerce stream
        this.business=loadImage("commerce/ba.jpg");
        this.bank=loadImage("commerce/banking.PNG");
        this.charteredA=loadImage("commerce/ca.jpg");

        // here I have loaded the images of Humanities stream
        this.arch=loadImage("humanities/Archaeologist.PNG");
        this.fashion=loadImage("humanities/fashionDesigner.PNG");
        this.law=loadImage("humanities/lawyer.PNG");
        this.literature=loadImage("humanities/lit.jpg");
        this.politics=loadImage("humanities/poliScience.PNG");
        this.teach=loadImage("humanities/Teaching.png");

        //here I have loaded the images which are for the average students
        this.armyImg=loadImage("average/army.PNG");
        this.blg=loadImage("average/blog.PNG");
        this.coder=loadImage("average/coding.PNG");
        this.massComm=loadImage("average/mass.PNG");
        this.sport=loadImage("average/sports.PNG");

        this.name=null;
    }
    display(){
        clear();
        doctor.destroy();
        lawyer.destroy();
        literature.destroy();
        career.destroy();
        capture.destroy();
        console.log(this.maths+"   "+this.english);
        var title=createElement('h1');
        title.html("Hello "+ this.name);
        title.position(displayWidth/2-60,100);

        //writing certain if conditions to give the user a suitable advise
        if(this.maths>80 && this.physics>80 && this.chemistry>80 && this.biology>80){
            var chemist=createSprite(90,height-570,20,20);
            chemist.addImage("chem",this.chemEngineer);
            chemist.scale=0.4;
           // alert("You have a large number of career options");

            var engineer=createSprite(320,height-570,100,100);
            engineer.addImage("Engineer",this.engineerImg);
            engineer.scale=0.2;


            var electricEngineer=createSprite(780,height-570,10,10);
            electricEngineer.addImage("electro",this.electricImg);
            electricEngineer.scale=0.6;

            var mechanic=createSprite(970,height-570,10,10);
            mechanic.addImage("mechanic",this.mechanicImg);
            mechanic.scale=0.15;

            var compEngineer=createSprite(110,height-370,10,10);
            compEngineer.addImage("comp",this.compEngineerImg);
            compEngineer.scale=0.4;

            var doc=createSprite(320,height-360,10,10);
            doc.addImage("doc",this.doctorImg);
            doc.scale=0.15;

            var neuro=createSprite(530,height-360,10,10);
            neuro.addImage("neuro",this.neurologist);
            neuro.scale=0.09;

            var genetics=createSprite(790,height-360,10,10);
            genetics.addImage("genes",this.geneticsImg);
            genetics.scale=0.3;

            var physicist=createSprite(110,height-160,10,10);
            physicist.addImage("phy",this.physic);
            physicist.scale=0.4;

            var  geo=createSprite(370,height-160,10,10);
            geo.addImage("g",this.geophy);
            geo.scale=0.35;

            var astronomer=createSprite(620,height-160,10,10);
            astronomer.addImage("a",this.astro);
            astronomer.scale=0.35;

            var meteorologist=createSprite(870,height-160,10,10);
            meteorologist.addImage("meteo",this.meteor);
            meteorologist.scale=0.4;


        } else if(this.english>80 && this.physics>80 && this.maths>80){
            var archi=createSprite(520,height-180,10,10);
            archi.addImage("sci",this.arc);
            archi.scale=0.5;


        }else if(this.maths>80 && this.chemistry>75){
            var chemist=createSprite(170,height-200,20,20);
            chemist.addImage("chem",this.chemEngineer);

        }else if(this.english>80 && this.maths>80){
            var bus=createSprite(220,height-180,10,10);
            bus.addImage("bu",this.business);
            bus.scale=0.5;

            var atm=createSprite(760,height-180,10,10);
            atm.addImage("at",this.bank);
            atm.scale=0.6;

            var car=createSprite(200,height-700,10,10);
            car.addImage("charteredAccountant",this.charteredA);
            car.scale=0.5;
            
            

        }else if(this.maths>85 && this.physics>75){
            var engineer=createSprite(120,height-150,100,100);
            engineer.addImage("Engineer",this.engineerImg);
            engineer.scale=0.3;


            var electricEngineer=createSprite(460,height-150,10,10);
            electricEngineer.addImage("electro",this.electricImg);

            var mechanic=createSprite(770,height-150,10,10);
            mechanic.addImage("mechanic",this.mechanicImg);
            mechanic.scale=0.2;

             
        }else if(this.maths>65 && this.maths<85){
            var compEngineer=createSprite(460,height-150);
            compEngineer.addImage("comp",this.compEngineerImg);
            compEngineer.scale=0.7;

        }else if(this.biology>85){
            var doc=createSprite(130,height-190,10,10);
            doc.addImage("doc",this.doctorImg);
            doc.scale=0.3;

            var neuro=createSprite(470,height-160,10,10);
            neuro.addImage("neuro",this.neurologist);
            neuro.scale=0.15;

            var genetics=createSprite(840,height-160,10,10);
            genetics.addImage("genes",this.geneticsImg);
            genetics.scale=0.5;

            var teacher=createSprite(840,height-560,10,10);
            teacher.addImage()
            
        }else if(this.physics>80){

            var physicist=createSprite(190,height-510,10,10);
            physicist.addImage("phy",this.physic);
            physicist.scale=0.6;

            var  geo=createSprite(160,height-150,10,10);
            geo.addImage("g",this.geophy);
            geo.scale=0.5;

            var astronomer=createSprite(900,height-440,10,10);
            astronomer.addImage("a",this.astro);
            astronomer.scale=0.5;

            var meteorologist=createSprite(580,height-140,10,10);
            meteorologist.addImage("meteo",this.meteor);
            meteorologist.scale=0.6;

        }else if(this.english>79){

            var liter=createSprite(220,height-200,10,10);
            liter.addImage("literate",)
            
            
        }else if(this.english<55 && this.physics<55 && this.chemistry<55 && this.biology<55 && this.maths<55 ){

            var arm = createSprite(220,height-500,10,10);
            arm.addImage("ar",this.armyImg);
            arm.scale=0.7;

            var blogger=createSprite(180,height-200,10,10);
            blogger.addImage("b",this.blg);
            blogger.scale=0.8;

            var code=createSprite(470,height-180,10,10);
            code.addImage("cod",this.coder);
            code.scale=0.5;

            var mas=createSprite(790,height-180,10,10);
            mas.addImage("masCom",this.massComm);
            mas.scale=0.6;

            var spor=createSprite(800,height-500,10,10);
            spor.addImage("spo",this.sport);
            spor.scale=0.5;
            
        }

        

    }
}