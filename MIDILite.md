# MIDILite

MIDILite is the lightweight JSON format Monic Theory uses to return your synthesized results. It gives you everything you need to preview and play back the music in your own application.

Think of MIDILite as your virtual piano roll. You use it to render the audio and show the user what they have created. Later on, when they decide to keep a result, a separate fulfillment call converts that exact MIDILite structure into a standard `.mid` file for download.

## How it is structured

At its core, a melody in Monic Theory is just a list of lines.

You can think of a "line" as a single monophonic voice, or one performer with one pair of hands. A line has a set capacity. You do not add a new lane just because you want to play another pitch. Instead, we create chords by having multiple monophonic lines play together at the same time.

Every line in a melody spans the exact same amount of time. If you want to know the total duration of the piece, you can just sum up the durations of the events on any single line.

To play it back, you just read each line from start to finish. At any given moment, the current chord is the instantaneous combination of ntoes at that point in time.

## What is in a note?

Each entry on a line represents a single event. Here is what is inside:

- **Duration:** Measured in beats (also called cycles), this tells you how long the event occupies the lane. To get the time in seconds, multiply the duration by 60, then divide by the asset's tempo in beats per minute. Because the tempo is kept at the asset level, you can speed up or slow down playback without ever having to rewrite the notes themselves.
- **Note number:** The standard MIDI pitch, 0 through 127. If the event is a rest, this is ignored.
- **Velocity:** The standard MIDI velocity, 0 through 127. If the event is a rest, this is ignored. A velocity of zero means silence, but it does *not* mean the event is a rest.
- **Rest:** If this is present and `true`, the lane simply advances by the duration without making a sound. If it is missing, the event is a regular note.
- **Color:** A visual marker (orange, yellow, green, cyan, blue, magenta, or fuchsia).
- **Major:** The chord context of the event (either major or minor).
- **Sharps:** When `true`, this selects sharp spelling.

Sound is scheduled when the event is not a rest and the velocity is above zero.

## Difference from Standard MIDI Format

A Standard MIDI file stores a stream of messages. Each message carries a delta time in ticks since the previous message. A sounding note requires a note-on message and, later on, a note-off message, and both of those messages name a channel.

MIDILite works differently. It stores how long the event lasts right on the event itself. The next event on that lane simply starts when that duration has elapsed. There is no note-off object, and the event does not carry a channel. The voice is just the lane's place in the list.
