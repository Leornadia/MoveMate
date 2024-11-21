import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Journal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([{ id: Date.now(), content: newEntry, date: new Date() }, ...entries]);
    setNewEntry('');
  };

  const quotes = [
    "The only bad workout is the one that didn't happen.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "Take care of your body. It's the only place you have to live.",
    "The hardest lift of all is lifting your butt off the couch.",
    "Your health is an investment, not an expense."
  ];

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Fitness Journal</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Today's Inspirational Quote</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="italic text-lg">{todaysQuote}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>New Journal Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder="Write about your fitness journey today..."
              rows={4}
              required
            />
            <Button type="submit">Save Entry</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Journal Entries</CardTitle>
        </CardHeader>
        <CardContent>
          {entries.map((entry) => (
            <div key={entry.id} className="mb-4 p-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-500 mb-2">{entry.date.toLocaleString()}</p>
              <p>{entry.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Journal;
