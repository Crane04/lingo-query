from django.shortcuts import render,HttpResponse
from PyDictionary import PyDictionary
from rest_framework.decorators import api_view
from rest_framework.response import Response
from wordhoard import *
from translate import Translator
import eng_to_ipa as phonetics


# Create your views here.

@api_view(["GET"])
def dictionary(request):

    try:
        pk = request.GET.get("word")

        phonetic = phonetics.convert(pk)
        dictionary = PyDictionary()

        meaning = dictionary.meaning(pk)

        antonym = Antonyms(pk)
        antonym = antonym.find_antonyms()

        synonym = Synonyms(pk)
        synonym = synonym.find_synonyms()

        hypernym = Hypernyms(pk)
        hypernym= hypernym.find_hypernyms()

        return Response(
            {
                "phonetics": phonetic,
                "meaning": meaning,
                "antonyms": antonym,
                "synonyms": synonym,
                "hypernyms": hypernym
            }
        )
    except:
        return Response({
            "Failed": "Couldn't get anything."
        })

@api_view(["GET"])
def translator(request):

    from_ = request.GET.get("from")
    to = request.GET.get("to")
    text = request.GET.get("text")

    translator= Translator(from_lang=from_,to_lang=to)
    translation = translator.translate(text)
    
    return Response({
        "meaning": translation
    })