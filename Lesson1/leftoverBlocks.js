function leftoverBlocks(numBlocks) {
  if (numBlocks === 0)
    return 0;
  
  let layerBlockCount = 1;
  let layerNum = 1;

  while(numBlocks >= layerBlockCount) {
    numBlocks -= layerBlockCount;

    layerNum += 1;
    layerBlockCount = layerNum * layerNum;
  }

  return numBlocks;
}

console.log(leftoverBlocks(16));