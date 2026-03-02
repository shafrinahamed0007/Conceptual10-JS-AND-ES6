function deductLifeCount(studentName) {
  let life = 3;

  let lifeDeductExecute = () => {
    if (life > 0) {
      life--;
      console.log(`${studentName}, you lost a life. Life remaining ${life}`);
    }
    else{
        console.log(`${studentName}, your life is over! No life left!`)
    }
  };

  return lifeDeductExecute;
}

const babu = deductLifeCount("babu");
babu();
babu();
babu();
babu();
