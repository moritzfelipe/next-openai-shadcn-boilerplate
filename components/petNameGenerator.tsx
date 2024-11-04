import { useState, ChangeEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { petNamePrompt } from '@/prompts/petNamePrompt'
import { useOpenAI } from '@/hooks/useOpenAI'

interface PetNameResponse {
  petName: string;
  description: string;
}

export default function PetNameGenerator() {
  const [animal, setAnimal] = useState('')
  const { result, loading, error, generateResponse } = useOpenAI<PetNameResponse>()

  const generatePetName = async () => {
    if (!animal.trim()) {
      return
    }

    const prompt = {
      ...petNamePrompt,
      userPrompt: petNamePrompt.userPrompt(animal)
    }

    await generateResponse(prompt)
  }

  const handleAnimalChange = (e: ChangeEvent<HTMLInputElement>) => setAnimal(e.target.value)

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">Pet Name Generator</CardTitle>
        <CardDescription className="text-center">Enter an animal to get a unique pet name</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => { e.preventDefault(); generatePetName(); }} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="animal">Animal Type</Label>
            <Input
              id="animal"
              placeholder="e.g., Cat, Dog, Rabbit"
              value={animal}
              onChange={handleAnimalChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Pet Name'}
          </Button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-2 animate-fade-in">
            <h3 className="text-xl font-semibold text-center text-gray-800">{result.petName}</h3>
            <p className="text-gray-600 text-center">{result.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}