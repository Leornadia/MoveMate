import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, Calendar, Plus } from 'lucide-react';

export default function Journal() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2024-01-28',
      title: 'Great Progress Today',
      content: 'Completed a full workout session and hit my daily step goal. Feeling energized and motivated!'
    },
    {
      id: 2,
      date: '2024-01-27',
      title: 'Recovery Day',
      content: 'Focused on stretching and mobility work today. Important to listen to my body and take rest when needed.'
    },
    {
      id: 3,
      date: '2024-01-26',
      title: 'New Personal Best',
      content: 'Hit a new PR on deadlifts today! Slowly but surely making progress towards my strength goals.'
    }
  ]);

  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ title: '', content: '' });

  const handleNewEntrySubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];
    setEntries([
      {
        id: entries.length + 1,
        date: currentDate,
        title: newEntry.title,
        content: newEntry.content
      },
      ...entries
    ]);
    setNewEntry({ title: '', content: '' });
    setShowNewEntryForm(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gradient-peach-pink">Fitness Journal</h1>
        <Button
          className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
          onClick={() => setShowNewEntryForm(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </div>

      {showNewEntryForm && (
        <Card className="mb-6 bg-black border-gradient-peach-pink">
          <CardHeader>
            <CardTitle className="text-gradient-peach-pink">Add New Journal Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNewEntrySubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Entry Title"
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                  required
                  className="bg-black/50 border-gradient-peach-pink text-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Write your entry here..."
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                  required
                  rows={4}
                  className="bg-black/50 border-gradient-peach-pink text-white"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setShowNewEntryForm(false)} className="border-gradient-peach-pink text-gray-300">
                  Cancel
                </Button>
                <Button type="submit" className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                  Save Entry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-gradient-peach-pink">
                <div className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {entry.title}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  {entry.date}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{entry.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
