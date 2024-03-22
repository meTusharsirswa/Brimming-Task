function minDeletionsForAnagram(STR1, STR2) {
  function getCharFrequency(str) {
    const frequency = {};
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  }

  const frequency1 = getCharFrequency(STR1);
  const frequency2 = getCharFrequency(STR2);

  let deletions = 0;

  for (let char in frequency1) {
    if (!(char in frequency2)) {
      deletions += frequency1[char];
    } else {
      deletions += Math.abs(frequency1[char] - frequency2[char]);
    }
  }

  for (let char in frequency2) {
    if (!(char in frequency1)) {
      deletions += frequency2[char];
    }
  }

  return deletions;
}

const STR1 = "ddt";
const STR2 = "gtd";
console.log(minDeletionsForAnagram(STR1, STR2));
