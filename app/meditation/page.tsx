'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import useMeditationTimer from '@/hooks/useMeditationTimer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { backgroundSounds, exercises, meditationTechniques } from '../../lib/meditationData'


export default function Meditation() {
  const {
    duration,
    setDuration,
    isActive,
    timeLeft,
    selectedSound,
    setSelectedSound,
    audioRef,
    toggleTimer,
    resetTimer,
    formatTime,
  } = useMeditationTimer(5, backgroundSounds[0].name);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Meditation Techniques</h1>
      <p className="text-lg">Explore these meditation techniques to improve your mental well-being.</p>
      {meditationTechniques.map((technique, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <CardTitle>{technique.title}</CardTitle>
            <CardDescription>{technique.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {technique.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ol>
          </CardContent>
          <CardFooter>
            <Button>Start {technique.title}</Button>
          </CardFooter>
        </Card>
      ))}
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">Physical Exercises for Mental Health</h1>
          <p className="text-lg">Discover how physical activity can boost your mental well-being.</p>
          {/* <ScrollArea className="h-[600px]"> */}
            {exercises.map((exercise, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle>{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Benefits:</h3>
                      <ul className="list-disc list-inside">
                        {exercise.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Tips:</h3>
                      <ul className="list-disc list-inside">
                        {exercise.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Learn More About {exercise.title}</Button>
                </CardFooter>
              </Card>
            ))}
          {/* </ScrollArea> */}
        </div>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Guided Meditation</CardTitle>
          <CardDescription>Set your meditation duration and background sound</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-medium">
              Duration: {duration} minutes
            </label>
            <Slider
              id="duration"
              min={1}
              max={60}
              step={1}
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              disabled={isActive}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sound" className="text-sm font-medium">
              Background Sound
            </label>
            <Select
              value={selectedSound}
              onValueChange={(value) => setSelectedSound(value)}
              disabled={isActive}
            >
              <SelectTrigger id="sound">
                <SelectValue placeholder="Select a sound" />
              </SelectTrigger>
              <SelectContent>
                {backgroundSounds.map((sound) => (
                  <SelectItem key={sound.name} value={sound.name}>
                    {sound.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{formatTime(timeLeft)}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</Button>
          <Button onClick={resetTimer} variant="outline">Reset</Button>
        </CardFooter>
        <audio ref={audioRef} src={backgroundSounds.find(sound => sound.name === selectedSound)?.src} loop />
      </Card>
    </div>
  );
}
