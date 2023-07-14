import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './css/leaflet.css';
import {Icon} from "leaflet";
import { useQueries } from '@tanstack/react-query';
import treeData from "./constants/pickup.json";
import 'leaflet/dist/leaflet.css';
import {FormProvider, useForm} from 'react-hook-form';

function Map (){
  const methods = useForm()
  const [activePickup, setActivePickup] = useState(null);
  const grinchIcon = new Icon({
    iconUrl: "static/map/img/grinch.png",
    iconSize: [25,25]
  })

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    //toggle()
    // TODO Make API call then close the popup
  })

  const { handleSubmit, register, formState: { errors }} = useForm()

  return (
      <>
      <MapContainer center={[42.5998, -71.3673]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

    // Load All map points
      {treeData.features.map(pickup => (
        <Marker
          key={pickup.properties.order_id}
       
          position={[
            pickup.geometry.coordinates[0],
            pickup.geometry.coordinates[1]
          ]}
        
          eventHandlers = {
            {
            click: () => {
              setActivePickup(pickup);
              },
            }
          }

          icon={grinchIcon}
        />
      ))}

    // Popup way point to display data
      { activePickup && (
        <Popup
          position={[
            activePickup.geometry.coordinates[0],
            activePickup.geometry.coordinates[1]
          ]}

        eventHandlers = {
          {
            close: () => {
              setActivePickup(null);
            },
          }
        }
        >

        <div>
          <h2>{activePickup.properties.address}</h2>
          <p><strong>Name</strong>: {activePickup.properties.name}</p>
          <p><strong>Phone</strong>: {
            <a href={'tel:' + activePickup.properties.phone}>
               {activePickup.properties.phone}
            </a>
          }
          </p>
          <p><strong>Tree Location</strong>: {activePickup.properties.whereisit}</p>
          <p><strong>Comment</strong> {activePickup.properties.customer_comment}</p>
          <FormProvider {...methods}>
            <form onSubmit={ handleSubmit(onSubmit)} className="container">
              <label>Got Tree <input name="pickupStatus" type="radio" value="Tree"/></label>
              <hr/>
              <label>Got Donation <input name="pickupStatus" type="radio" value="Donation"/></label>
              <hr/>
              <label>Got Both <input name="pickupStatus" type="radio" value="Both"/></label>
              <hr/>
              <button>Submit</button>
            </form>
          </FormProvider>
        </div>
        </Popup>
      )}
      </MapContainer>
      </>
  );
}
export default Map;
