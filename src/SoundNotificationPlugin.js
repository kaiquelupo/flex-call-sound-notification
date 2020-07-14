import { FlexPlugin } from 'flex-plugin';

export default class AlertTask extends FlexPlugin {

  name = 'SoundNotificationPlugin';

  init(flex, manager) {

    const audio = new Audio(`${process.env.REACT_APP_FLEX_AUDIOS_BASE_URL}/ringback_tone.mp3`);

    manager.workerClient.on('reservationCreated', reservation => {

      const isVoiceQueue = reservation.task.taskChannelUniqueName === 'voice';
      const isInboundTask = reservation.task.attributes.direction === 'inbound';
      
      if (isVoiceQueue && isInboundTask) {
        playAudio(reservation);
      }

    });

    const playAudio = reservation => {

      audio.play();
      
      ['accepted', 'canceled', 'rejected', 'rescinded', 'timeout'].forEach(e => {
        reservation.on(e, () => audio.pause());
      });

    };

  }

}