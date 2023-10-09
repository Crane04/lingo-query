from django.shortcuts import render,HttpResponse
from PyDictionary import PyDictionary
from rest_framework.decorators import api_view
from rest_framework.response import Response
from wordhoard import *
from translate import Translator
import eng_to_ipa as phonetics
import nltk
from nltk.corpus import wordnet



@api_view(["GET"])
def dictionary(request):

    try:
        word = request.GET.get("word")

        phonetic = phonetics.convert(word)
        dictionary = PyDictionary()

        meaning = dictionary.meaning(word)

        antonyms = []

        for syn in wordnet.synsets(word):
            for lemma in syn.lemmas():
                if word == lemma.name():
                    pass
                else:
                    if lemma.name() in antonyms:
                        pass
                    else:
                        if lemma.antonyms():
                            antonym_name = lemma.name().replace('_', ' ')
                            antonyms.append(antonym_name)
                        else:
                            pass

        synonym = []
        for syn in wordnet.synsets(word):
            for lemma in syn.lemmas():
                if word == lemma.name():
                    pass
                else:
                    if lemma.name() in synonym:
                        pass
                    else:
                        synonym_name = lemma.name().replace('_', ' ')
                        synonym.append(synonym_name)

        hypernym = []
        for syn in wordnet.synsets(word):
            for hyper in syn.hypernyms():
                hypernym_name = hyper.name().replace('_', ' ').split('.')[0]  # Replace underscores and remove .n.01
                hypernym.append({
                    'hypernym': hypernym_name,
                    'definition': hyper.definition(),
                })

        return Response(
            {
                "phonetics": phonetic,
                "meaning": meaning,
                "antonyms": antonyms,
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
