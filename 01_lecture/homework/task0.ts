function isAnagram(str1: string, str2: string): boolean {
  return (
    str1.split("").sort().join("").toLowerCase() ===
    str2.split("").sort().join("").toLowerCase()
  );
}
