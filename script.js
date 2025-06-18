async function translateText()
    
{
    const input=document.getElementById("inputLang").value .trim();//trim it count  input spaces
    const output=document.getElementById("outputLang");
    const from=document.getElementById("fromlang").value;
    const to=document.getElementById("tolang").value;

    if(!input)
    {
        output.value="please Enter a text";
        return;
    }
    output.value="Tlanslating ...";
    const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        input
    )}&langpair=${from}|${to}`;
    try
    {
        const res = await fetch(url);
        const data = await res.json();
        const translated = data.responseData.translatedText;
        output.value = translated || "Translation failed.please try again."; 
    }
    catch (err)
    
    {
   console.error(err);
   output.value="An error occurred while translating. please try again.";
    }
}
