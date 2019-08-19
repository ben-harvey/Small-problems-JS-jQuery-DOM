const CODONS_AND_PROTEINS = {
  'Methionine': ['AUG'] ,
  'Phenylalanine': ['UUU', 'UUC' ],
  'Leucine': ['UUA', 'UUG' ],
  'Serine': ['UCU', 'UCC', 'UCA', 'UCG' ],
  'Tyrosine': ['UAU', 'UAC' ],
  'Cysteine': ['UGU', 'UGC' ],
  'Tryptophan': ['UGG'],
  'STOP': ['UAA', 'UAG', 'UGA'],
}

/*
input: a string of rna, made up of 3 char codons
output: an array of proteins
rules:
  rna is made of 3 character codon groups
  each codon group is related to a protein
    except for the 3 STOP codons
    these stop the translation as soon as one is encountered

  multiple codons can translate to one protein ( eg UUA, UUG -> Leucine )
  if input can't be split to valid codons, return null


data structure:
  object where key is protein/stop and value is array of codons;

algorithm:
  split input into an array of codons
    split every 3 characters
      loop from index 0 to end of rna
        slice from current index to index plus 3
        push onto result
  check if every codon in that array is valid
    make a flat array of all valid codon names
    check each codon in input is included in that array
    if not, return null
  set a result array
  for each codon in input ** consider for of loop to break from inside loop!
    iterate through keys in CODONS
    if value includes current codon
      if the key is 'STOP'
        return the result array
      else
        push the key to the result array


*/
const ALL_CODONS = [ 'AUG',
  'UUU',
  'UUC',
  'UUA',
  'UUG',
  'UCU',
  'UCC',
  'UCA',
  'UCG',
  'UAU',
  'UAC',
  'UGU',
  'UGC',
  'UGG',
  'UAA',
  'UAG',
  'UGA' ]

const splitRnaToCodons = function (rna) {
  const result = [];
  for(let i = 0; i < rna.length; i += 3) {
    result.push(rna.slice(i, i + 3));
  }
  return result;
}

const allValidCodons = function (codons) {
  return codons.every(codon => ALL_CODONS.includes(codon) );
}

const translate = function (rna) {
  const codons = splitRnaToCodons(rna);
  if(!allValidCodons(codons)) { return null };
  const proteins = Object.keys(CODONS_AND_PROTEINS);
  const translatedProteins = [];

  for(let codon of codons) {
    for(let protein of proteins) {
      if (CODONS_AND_PROTEINS[protein].includes(codon)) {
        if(protein === 'STOP') { return translatedProteins };
        translatedProteins.push(protein);
      }
    }
  }
  return translatedProteins;
}


  console.log(translate('AUGUUUUGG')); //
  // expected = %w(Methionine Phenylalanine Tryptophan)
  console.log(translate('AUGUUUUAA')); //
  // expected = %w(Methionine Phenylalanine)
  console.log(translate('UGGUGUUAUUAAUGGUUU')); //
  // expected = %w(Tryptophan Cysteine Tyrosine)
  console.log(translate('CARROT')); // null
  console.log(translate('AUGUUUUGGA')); // null partial codon
  console.log(translate('')); // []
